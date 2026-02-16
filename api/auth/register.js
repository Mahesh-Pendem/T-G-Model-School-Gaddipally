const { getDb } = require('../../lib/db');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'tgms-secret-change-in-production';

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { uid, uname, emailid, mobilenum } = req.body || {};
    if (!uid || !uname || !emailid || !mobilenum) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input. Please provide uid, uname, emailid, and mobilenum.',
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailid)) {
      return res.status(400).json({ success: false, message: 'Invalid email address.' });
    }

    const db = await getDb();
    const users = db.collection('users');
    const existing = await users.findOne({ uid: String(uid).trim() });
    if (existing) {
      return res.status(400).json({ success: false, message: 'User ID already registered.' });
    }

    await users.insertOne({
      uid: String(uid).trim(),
      uname: String(uname).trim(),
      emailid: String(emailid).trim(),
      mobilenum: String(mobilenum).trim(),
      createdAt: new Date(),
    });

    const token = jwt.sign({ uid: String(uid).trim() }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(201).json({ success: true, message: 'Registration successful!', token });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ success: false, message: 'Registration failed. Please try again.' });
  }
};
