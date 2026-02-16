require('dotenv').config();
const express = require('express');
const cors = require('cors');
const register = require('../api/auth/register');
const login = require('../api/auth/login');
const users = require('../api/users');
const contact = require('../api/contact');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/api/auth/register', (req, res) => register(req, res));
app.post('/api/auth/login', (req, res) => login(req, res));
app.get('/api/users', (req, res) => users(req, res));
app.post('/api/contact', (req, res) => contact(req, res));

app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
