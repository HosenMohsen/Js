let button = document.querySelector("#button");
let li = document.querySelectorAll("#Liste li");

button.addEventListener("click", (event) =>{
    li.forEach((element) => {
        element.classList.toggle("rouge");
    });

});