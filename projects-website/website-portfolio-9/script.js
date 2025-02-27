// NAVBAR
const navbar = document.querySelector(".navbar"),
    toggleButton = document.querySelector(".toggle__button");

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
});
