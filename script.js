// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = () => {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is empty and alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if the input is empty
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content to the input value

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Assign the class for styling

        // Add event listener to the remove button to delete the task
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the task from the list
        };

        
        li.appendChild(removeButton);

   
        taskList.appendChild(li);

        // Clear the input field for new entries
        taskInput.value = '';
    };

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter in the task input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
