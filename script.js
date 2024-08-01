// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = () => {
        
        if (taskText === '') {
            alert('Please enter a task.');
            return; 
        }

       
        const li = document.createElement('li');
        li.textContent = taskText; 

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; 

       
        removeButton.onclick = () => {
            taskList.removeChild(li); 
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
