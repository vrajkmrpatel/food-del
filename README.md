# 🍔 MERN Food Delivery App

This is a full-stack food delivery application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It features separate **admin** and **user (frontend)** interfaces with a complete backend API and authentication system.

## 🛠️ Tech Stack

- **Frontend:** React.js + Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **File Uploads:** Multer
- **Styling:** Talwind CSS 
- **Deployment Ready:** Yes

---

## 📁 Project Structure

```
food-delivery/
│
├── admin/               # Admin panel 
├── backend/             # Express backend
│   ├── controllers/     # API route handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── config/          # DB and other configurations
│   └── server.js        # Entry point
│
├── frontend/            # React.js + Vite frontend
│   ├── public/
│   ├── src/
│   └── index.html
│
└── .gitignore
```

---

## 🚀 Features

- 🔐 JWT-based authentication (login/register)
- 📦 Cart and checkout functionality
- 🧾 Order management (create, track)
- 🖼️ Product image uploads using Multer
- 📊 Admin panel (WIP or planned)
- ⚡ Vite-powered React frontend for fast dev experience

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/food-delivery.git
cd food-delivery
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Add your MongoDB URI and JWT secret
npm start             # Runs on http://localhost:5000
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev           # Runs on http://localhost:5173
```

---

## 🔐 Environment Variables

In `backend/.env`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 📦 Future Improvements

- Order analytics
- Reviews & ratings
- Push notifications

