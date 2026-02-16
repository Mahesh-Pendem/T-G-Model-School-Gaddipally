const { getDb } = require('../lib/db');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'tgms-secret-change-in-production';

function getToken(req) {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer ')) return auth.slice(7);
  return null;
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const token = getToken(req);
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    jwt.verify(token, JWT_SECRET);

    const db = await getDb();
    const users = db.collection('users');
    const list = await users
      .find({}, { projection: { _id: 0, uid: 1, uname: 1, emailid: 1, mobilenum: 1 } })
      .toArray();
    return res.status(200).json({ success: true, users: list });
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    console.error('Users list error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch users.' });
  }
};
