const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/task_manager")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });

// Just a test route
app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
