
let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    input.value = "";

    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    const emptyMessage = document.getElementById("emptyMessage");

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div class="task-buttons">
                <button class="complete-btn" onclick="completeTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button class="delete-btn" onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function completeTask(id) {
    tasks = tasks.map(function(task) {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    displayTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

displayTasks();

