const firstDiv = document.querySelector ('#root');
const secondDiv = document.createElement ('div');
firstDiv.append (secondDiv);
secondDiv.classList.add ('second__div');

const thirdDiv = document.createElement ('div');
secondDiv.append (thirdDiv);
thirdDiv.classList.add ('third__div');

const listMenu = document.createElement ('div');
thirdDiv.append (listMenu);
listMenu.classList.add ('todo__menu');

const deleteButton = document.createElement ('button');
listMenu.append (deleteButton);
deleteButton.classList.add ('delete__button');
deleteButton.innerHTML = 'Delete All';

const inputEnter = document.createElement ('input');
listMenu.append (inputEnter);
inputEnter.classList.add ('enter__input');
inputEnter.setAttribute = ('placeholder', 'Enter to do...');

const addButton = document.createElement ('button');
listMenu.append (addButton);
addButton.classList.add ('add__button');
addButton.innerHTML = 'Add';

const toDoParts = document.createElement ('div');
thirdDiv.append (toDoParts);
toDoParts.classList.add ('todo__unit');

const toDoConfirm = document.createElement ('button');
toDoParts.append (toDoConfirm);
toDoConfirm.classList.add ('todo__confirm');
toDoConfirm.innerHTML = '✓';

const toDoText = document.createElement ('p');
toDoParts.append (toDoText);
toDoText.classList.add ('todo__text');
toDoText.innerHTML = 'Todo text';

const toDoSide = document.createElement ('div');
toDoParts.append (toDoSide);
toDoSide.classList.add ('todo__sidepart');

const toDoCancel = document.createElement ('button');
toDoSide.append (toDoCancel);
toDoCancel.classList.add ('todo__cancel');
toDoCancel.innerHTML = 'x';

const toDoDate = document.createElement ('p');
toDoSide.append (toDoDate);
toDoDate.classList.add ('todo__date');
toDoDate.innerHTML = 'Date';

const toDoPartsClone = toDoParts.cloneNode (true);
thirdDiv.append (toDoPartsClone);