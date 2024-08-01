// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    const addTask = () => {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if the input is empty
        }

        // Task Creation and Removal
        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText; // Set its textContent to taskText

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set its textContent to "Remove"
        removeButton.classList.add('remove-btn'); // Add class 'remove-btn' using classList.add

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    };

    // Attach Event Listeners
    // Add an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if event.key is equal to 'Enter'
            addTask();
        }
    });
});
