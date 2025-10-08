# 🧑‍💼 Staffing Management System (Prototype)

A basic prototype of a **Staffing Management System** built using **Node.js**, **MySQL**, and **React (Vite)**.

This project demonstrates core staffing functionalities — candidate management, client tracking, job assignments, and simple reporting — with clean UI and organized backend structure.

---

## 🚀 Features

### 👤 Candidate Management
- Add new candidates (name, skills, experience)
- View and filter candidates by skills or keywords

### 🏢 Client / CRM Management
- Add and manage client information (company name, contact details)
- Track open job orders linked to each client

### 💼 Job / Assignment Management
- Create job requisitions and link them to clients
- Assign candidates to job orders

### 📊 Reporting / Dashboard
- Number of active candidates
- Number of open job orders
- Candidate-job assignments summary

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite), Axios, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Tools | Postman, Git, GitHub |

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AdilAhmedShekhani/staffing-system.git
cd staffing-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

#### Create `.env` file
```bash
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=staffing_system
```

#### Start the backend server
```bash
node server.js
```

Server should start on:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🧩 Folder Structure

```
staffing-system/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── .env
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── .gitignore
│   └── vite.config.js
│
└── README.md
```

---

## 🧠 Future Improvements
- Add authentication (Admin / Recruiter)
- Add pagination and sorting in candidate lists
- Email notifications when candidate assigned
- Generate PDF reports

---

## 👨‍💻 Author

**Adil Ahmed Shekhani**  
[🌐 LinkedIn](https://www.linkedin.com/in/adilahmedshekhani/)  
📍 Karachi, Pakistan

---

## 🪪 License
This project is open-source and available under the [MIT License](LICENSE).
