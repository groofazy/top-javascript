const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span')
    const listBtn = document.createElement('button');

    listItem.appendChild(listText); // append span as child of list item
    listItem.appendChild(listBtn); // append button as child of list item

    listText.textContent = myItem;
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);


});
