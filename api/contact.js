const { getDb } = require('../lib/db');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};
    const yourName = name || req.body?.yourName;
    const yourEmail = email || req.body?.yourEmail;
    const yourMessage = message || req.body?.yourMessage;
    if (!yourName || !yourEmail || !yourMessage) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    const db = await getDb();
    const collection = db.collection('contact_submissions');
    await collection.insertOne({
      name: String(yourName).trim(),
      email: String(yourEmail).trim(),
      message: String(yourMessage).trim(),
      createdAt: new Date(),
    });
    return res.status(201).json({ success: true, message: 'Submitted successfully!' });
  } catch (err) {
    console.error('Contact submit error:', err);
    return res.status(500).json({ success: false, message: 'Submission failed. Please try again.' });
  }
};
