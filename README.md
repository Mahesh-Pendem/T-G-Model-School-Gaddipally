# TG Model School Gaddipally – MERN Stack

Official website for **T G Model School and Jr. College Gaddipally** built with the MERN stack (MongoDB, Express, React, Node.js), deployable on **GitHub** and **Vercel**.

## Features

- **Home** – School intro and announcements
- **Login / Register** – User auth (Admission No + Name); JWT-based
- **Users** – Protected list of registered users (after login)
- **Contact** – Teachers details and contact form (messages stored in MongoDB)
- **Gallery, About, Vision, Time Table, Bonafide, Hall Ticket** – Static content pages

## Tech Stack

- **Frontend:** React 18, Vite, React Router, Bootstrap 5
- **Backend:** Node.js, Vercel Serverless Functions (API routes)
- **Database:** MongoDB (e.g. [MongoDB Atlas](https://www.mongodb.com/atlas))

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Git

## Run Locally

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/TGMS.git
cd TGMS
npm run install:all
```

### 2. Environment variables

Copy `.env.example` to `.env` in the project root and set:

- `MONGODB_URI` – MongoDB connection string (e.g. Atlas URI)
- `JWT_SECRET` – Any strong secret for JWT signing

### 3. Start backend and frontend

**Option A – Backend + frontend (recommended for dev):**

```bash
# Terminal 1: API (port 3001)
cd server && npm run dev

# Terminal 2: React (port 3000, proxies /api to 3001)
cd client && npm run dev
```

Then open: **http://localhost:3000**

**Option B – Frontend only (if API is already deployed):**

```bash
cd client && npm run dev
```

Set `VITE_API_URL` in `client/.env` if your API is on another origin.

## Deploy on GitHub and Vercel

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step instructions.

### 1. Push to GitHub

```bash
git add .
git commit -m "MERN stack TGMS"
git push origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. **Add New Project** → Import your **TGMS** repo.
3. Leave **Framework Preset** as “Other” or “Vite” if detected.
4. Set:
   - **Root Directory:** (leave default)
   - **Build Command:** `cd client && npm ci && npm run build`
   - **Output Directory:** `client/dist`
   - **Install Command:** `npm install && cd client && npm install`
5. Add **Environment Variables** (Settings → Environment Variables):
   - `MONGODB_URI` – your MongoDB connection string
   - `JWT_SECRET` – a strong random secret
6. Deploy. Vercel will build the React app and deploy the `/api` serverless functions.

### 3. After deploy

- **Site:** `https://your-project.vercel.app`
- **API:** `https://your-project.vercel.app/api/auth/login`, `/api/auth/register`, `/api/users`, `/api/contact`
- Pushes to `main` auto-deploy on Vercel.

## Project structure

```
TGMS/
├── api/                 # Vercel serverless API
│   ├── auth/
│   │   ├── login.js
│   │   └── register.js
│   ├── users.js
│   └── contact.js
├── client/              # React (Vite) frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/              # Local Express API (dev only)
├── lib/
│   └── db.js            # MongoDB connection helper
├── vercel.json
├── .env.example
└── package.json
```

## License

For use by TG Model School Gaddipally.
