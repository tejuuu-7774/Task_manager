# Task Manager Application
---
A simple and clean full-stack Task Management web application that allows users to create, view, update, and delete tasks with persistent storage.
---

## Features

- Create tasks with title, description, and status
- View all tasks in a clean UI
- Update task status to completed
- Delete tasks with confirmation
- Persistent data storage using MongoDB
- Responsive and modern user interface

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Local)

## Project Structure

task_manager/
├── backend/
│ ├── models/
│ │ └── Task.js
│ ├── routes/
│ │ └── taskRoutes.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md

---

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

---

### Backend Setup

1. Navigate to backend folder:
- cd backend

2. Install dependencies:
- npm install

3. Start the server:
- npm run dev

4. The backend will run at:
- http://localhost:3000 

### Frontend Setup
1. Open the frontend folder in VS Code

2. Use Live Server to open index.html

3. Frontend will communicate with backend via REST APIs.

----
API Endpoints

Method	 Endpoint	     Description

GET	     /api/tasks	     Get all tasks

POST	 /api/tasks	     Create a new task

PUT	     /api/tasks/:id	 Update a task

DELETE	 /api/tasks/:id	 Delete a task
