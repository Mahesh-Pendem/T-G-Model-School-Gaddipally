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
    const { uid, uname } = req.body || {};
    if (!uid || !uname) {
      return res.status(400).json({ success: false, message: 'Admission No and Name are required.' });
    }

    const db = await getDb();
    const users = db.collection('users');
    const user = await users.findOne({
      uid: String(uid).trim(),
      uname: String(uname).trim(),
    });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials. Please try again.' });
    }

    const token = jwt.sign({ uid: user.uid }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ success: true, token, uid: user.uid });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
};
