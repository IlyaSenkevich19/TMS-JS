function Todo (title, createdDate, id, isChecked ) {
    this.id = id || Date.now();
    this.createdDate = createdDate || new Date().toLocaleDateString();
    this.title = title;
    this.isChecked = isChecked || false;
};

export { Todo };