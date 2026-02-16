# Deploy TGMS to GitHub and Vercel

## Step 1: Push to GitHub

### If you don't have a GitHub repo yet

1. Create a new repository on [github.com](https://github.com):
   - Click **New repository**
   - Name: `TGMS` (or any name)
   - Leave it **empty** (no README, no .gitignore)
   - Create repository

2. In your project folder, run:

```bash
cd /home/rgukt-basar/TGMS

# If this is already a git repo (you have .git folder):
git remote -v
# If 'origin' is not your new repo, set it:
# git remote set-url origin https://github.com/YOUR_USERNAME/TGMS.git

git add .
git status
git commit -m "TGMS MERN - ready for deploy"
git branch -M main
git push -u origin main
```

### If you already have a GitHub repo

```bash
cd /home/rgukt-basar/TGMS
git add .
git commit -m "TGMS MERN - ready for deploy"
git push origin main
```

---

## Step 2: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in (use **GitHub**).

2. Click **Add New...** → **Project**.

3. **Import** your **TGMS** repository (select it from the list).

4. **Configure Project** (Vercel may auto-detect; if not, set these):
   - **Framework Preset:** Other (or Vite)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `cd client && npm ci && npm run build`
   - **Output Directory:** `client/dist`
   - **Install Command:** `npm install && cd client && npm install`

5. **Environment Variables** (important):
   - Click **Environment Variables**
   - Add:
     - **Name:** `MONGODB_URI`  
       **Value:** your MongoDB connection string (e.g. from [MongoDB Atlas](https://www.mongodb.com/atlas) → Connect → Driver → copy URI)
     - **Name:** `JWT_SECRET`  
       **Value:** a long random string (e.g. use a password generator)

6. Click **Deploy**.

7. Wait for the build to finish. Your site will be at:
   - **https://your-project-name.vercel.app**

---

## After deployment

- **Website:** `https://your-project-name.vercel.app`
- **API:** same URL, e.g. `https://your-project-name.vercel.app/api/auth/login`

Every push to the `main` branch on GitHub will trigger a new deployment on Vercel automatically.

## MongoDB (if you haven't set it up)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account.
2. Create a **Cluster** (free tier).
3. **Database Access** → Add user (username + password).
4. **Network Access** → Add IP `0.0.0.0` (allow from anywhere) for Vercel.
5. **Connect** → **Drivers** → copy the connection string.
6. Replace `<password>` in the string with your user password.
7. Use this as `MONGODB_URI` in Vercel environment variables.
