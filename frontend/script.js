const TASK_API = "http://localhost:3000/api/tasks";

// DOM references
const taskContainer = document.getElementById("taskList");
const taskTitleField = document.getElementById("title");
const taskDescField = document.getElementById("description");
const taskStatusField = document.getElementById("status");

// Fetch and render all tasks
async function loadTasks() {
  try {
    const response = await fetch(TASK_API);
    const allTasks = await response.json();

    taskContainer.innerHTML = "";

    allTasks.forEach((singleTask) => {
      const taskItem = document.createElement("li");

      taskItem.innerHTML = `
        <strong>${singleTask.title}</strong>
        <small>${singleTask.description || "No description provided."}</small>
        <div class="task-meta">
          <span class="status-pill">${singleTask.status.toUpperCase()}</span>
          <div class="action-btns">
            <button class="btn-check" onclick="markTaskCompleted('${singleTask._id}')" title="Complete">✔</button>
            <button class="btn-del" onclick="removeTask('${singleTask._id}')" title="Delete">🗑</button>
          </div>
        </div>
      `;

      taskContainer.appendChild(taskItem);
    });
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
}

// Create a new task
async function createTask() {
  const newTask = {
    title: taskTitleField.value,
    description: taskDescField.value,
    status: taskStatusField.value,
  };

  if (!newTask.title) {
    alert("Please enter a task title!");
    return;
  }

  await fetch(TASK_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });

  // To Clear input fields after submission
  taskTitleField.value = "";
  taskDescField.value = "";
  taskStatusField.value = "Pending";

  loadTasks();
}

// Mark a task as completed
async function markTaskCompleted(taskId) {
  await fetch(`${TASK_API}/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Completed" }),
  });

  loadTasks();
}

// Delete a task 
async function removeTask(taskId) {
  if (!confirm("Are you sure you want to delete this task?")) return;
  
  await fetch(`${TASK_API}/${taskId}`, {
    method: "DELETE",
  });

  loadTasks();
}

// Load tasks 
loadTasks();
