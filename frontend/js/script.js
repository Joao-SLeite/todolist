const fetchTasks = async () => {
    const response = await fetch(
        'https://api-todolist-fismed.cyclic.app/tasks'
    );

    console.log(response);
};

fetchTasks();
