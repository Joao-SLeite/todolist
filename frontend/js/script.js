const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

const fetchTasks = async () => {
    const response = await fetch(
        'https://api-todolist-fismed.cyclic.app/tasks'
    );
    const tasks = await response.json();
    return tasks;
};

const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };

    await fetch('https://api-todolist-fismed.cyclic.app/tasks', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(task),
    });

    loadTasks();
    inputTask.value = '';
};

const deleteTask = async (id) => {
    await fetch(`https://api-todolist-fismed.cyclic.app/tasks/${id}`, {
        method: 'delete',
    });

    loadTasks();
};

const formatDate = (dateUTC) => {
    const options = {
        dateStyle: 'long',
        timeStyle: 'short',
    };
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
};

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);

    if (innerText) {
        element.innerText = innerText;
    }
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
};

const createSelect = (value) => {
    const options = `
    <option value="pendente">Pendente</option>
    <option value="em andamento">Em andamento</option>
    <option value="concluido">Concluído</option>
    `;
    const select = createElement('select', '', options);
    select.value = value;

    return select;
};

const createRow = (task) => {
    const { id, title, status, created_at } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', formatDate(created_at));
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const select = createSelect(status);

    const editButton = createElement(
        'button',
        '',
        '<span class="material-symbols-outlined">edit</span>'
    );
    const deleteButton = createElement(
        'button',
        '',
        '<span class="material-symbols-outlined">delete</span>'
    );
    editButton.classList.add('btn-action');

    deleteButton.classList.add('btn-action');
    deleteButton.addEventListener('click', () => {
        deleteTask(id);
    });

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    return tr;
};

const loadTasks = async () => {
    const tasks = await fetchTasks();

    tbody.innerHTML = '';

    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
};

addForm.addEventListener('submit', addTask);

loadTasks();
