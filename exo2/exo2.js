let element = document.getElementById("p1");
console.log(element);

element.innerHTML = "Je suis ici";

console.log(element);

element.insertAdjacentHTML("afterend", "<p> chez moi <p>");

let p2 = document.getElementById("p2");
p2.remove();