function buildTodoTemplate(e) {
    const date = e.createdDate;
    const chekedAttr = e.isChecked ? 'checked' : '';
    const title = e.title || inputElement.value;
    const isChecked = chekedAttr ? 'V' : '';
    return `
    <div class='todo ${chekedAttr}' id='${e.id}'>
        <button class='checkbox'>${isChecked}</button>
        <div class='innerText'>${title}</div>
        <div class='innerDiv'>
            <button class='reset'>X</button>
            <div class='date'>${date}</div>
        </div>
    </div>`;
};

export { buildTodoTemplate };