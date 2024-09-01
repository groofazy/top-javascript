const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

// creating new paragraph

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride!";

// appending new paragraph to section

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for web dev knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// moving link paragraph to bottom of section

sect.appendChild(linkPara);

// linkPara.parentNode.removeChild(linkPara); // removes node by removing itself
// sect.removeChild(linkPara); // removes child from parent node

para.setAttribute("class", "highlight");  