// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// console.log(navbarNav);
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};
