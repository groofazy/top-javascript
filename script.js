const container = document.querySelector("#container");

const content = document.createElement("div"); 
content.classList.add("content"); // adding a class
content.textContent = "This is text-content!"; // writing text into content

container.appendChild(content); // append content into container 

const paragraph_1 = document.createElement("p");
paragraph_1.classList.add("paragraph_1");
paragraph_1.textContent = "Hey I'm red!"
paragraph_1.style.color = "red";

container.appendChild(paragraph_1);

const header_3 = document.createElement("h3");
header_3.classList.add("header_3");
header_3.textContent = "I'm a blue h3!";
header_3.setAttribute("style", "color: blue;");

container.appendChild(header_3);

const divider = document.createElement("div");

const header_1 = document.createElement("h1");
header_1.classList.add("header_1");
header_1.textContent = "I'm in a div";

divider.appendChild(header_1);

const paragraph_2 = document.createElement("p"); 
paragraph_2.classList.add("paragraph_2");
paragraph_2.textContent = "ME TOO!";

divider.appendChild(paragraph_2);
container.appendChild(divider);

const btn = document.querySelector("#b1");
btn.addEventListener("click", () => {
    alert("Hello World");
});

const buttons = document.querySelectorAll("button"); // node list, like array

buttons.forEach((button) => { // forEach iterates through each btn
    button.addEventListener("click", () => { // adding click listener for each btn
        alert(button.id);
    });
});

