// Responsive list
let burger = document.querySelector("nav .bars");
let ul = document.querySelector("nav ul");
burger.addEventListener("click", () => {
  ul.classList.toggle("show")
})