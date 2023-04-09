function updateLocaleStorage(data){
    const todos = JSON.stringify(data);
    localStorage.setItem('todos', todos);
};

export { updateLocaleStorage };