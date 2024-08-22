# INITIALIZATION

// Backend

- Create backend folder
- create server.js
- cd .. then npm init
- in package.json, "main": "server.js"

// Frontend

- cd .. then npx create vite@latest frontend
- cd frontend npm install
- copy .gitignore from frontend to backend

// Github

- git init
- create new repository in github
- git add .
- git commit -m "first commit" (copied from github)
- git branch -M main
- git remote add origin https://github.com/judd-gnizama/mern_court_control.git
- git push -u origin main

// Deploying Full Stack App to Vercel

- add vercel.json:
  (if vercel.json and server.js is in same directory)
  {
  "version": 2,
  "builds": [
  {
  "src": "server.js",
  "use": "@vercel/node"
  }
  ],
  "routes": [
  {
  "src": "/(.*)",
  "dest": "/"
  }
  ]
  }
  (if vercel.json and server.js is one directory above server.js)
  {
  "version": 2,
  "builds": [
  {
  "src": "backend/server.js",
  "use": "@vercel/node"
  }
  ],
  "routes": [
  {
  "src": "/(.*)",
  "dest": "backend/server.js"
  }
  ]
  }
