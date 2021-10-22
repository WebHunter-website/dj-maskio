let modal = document.querySelector(".modal");
let button = document.querySelector("button");
let close = document.querySelector(".close-button");

button.addEventListener("click", () => {
    modal.classList.remove("hidden");
})

close.addEventListener("click", () => {
    modal.classList.add("hidden");
})