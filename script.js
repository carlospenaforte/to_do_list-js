document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('input[type="text"]');
    const addButton = document.querySelector('button.add');
    const taskList = document.querySelector('ul');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const newTask = document.createElement('li');

            const taskTextInput = document.createElement('input');
            taskTextInput.type = 'text';
            taskTextInput.value = taskText;
            taskTextInput.disabled = true;

            const taskActions = document.createElement('div');

            const editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'edit';

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove');
            removeButton.textContent = 'delete';

            taskActions.appendChild(editButton);
            taskActions.appendChild(removeButton);

            newTask.appendChild(taskTextInput);
            newTask.appendChild(taskActions);
            taskList.appendChild(newTask);

            taskInput.value = '';

            editButton.addEventListener('click', () => {
                if (taskTextInput.disabled) {
                    taskTextInput.disabled = false;
                    taskTextInput.focus();
                    editButton.textContent = 'save';
                } else {
                    taskTextInput.disabled = true;
                    editButton.textContent = 'edit';
                }
            });

            removeButton.addEventListener('click', () => {
                taskList.removeChild(newTask);
            });
        }
    });
});
