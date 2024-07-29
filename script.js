document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    loadTasks();

    // Add task button click event
    addButton.addEventListener('click', () => {
        addTask();
    });

    // Add task on 'Enter' key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    /**
     * Load tasks from Local Storage and display them in the task list
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    /**
     * Add a new task to the task list and optionally save it to Local Storage
     * @param {string} taskText - The text of the task to add
     * @param {boolean} save - Whether to save the task to Local Storage (default: true)
     */
    function addTask(taskText, save = true) {
        // If no taskText is passed, get it from input field
        if (taskText === undefined) {
            taskText = taskInput.value.trim();
        }

        // Check if taskText is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create task list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the li element from taskList
            removeTask(taskText); // Update Local Storage
        };

        // Append remove button and task item to list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Save task to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    /**
     * Remove a task from Local Storage
     * @param {string} taskText - The text of the task to remove
     */
    function removeTask(taskText) {
        // Remove task from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
