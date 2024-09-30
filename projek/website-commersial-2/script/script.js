// search
const searchBox = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    searchBox.classList.toggle("active");
};

// ketika klik diluar sidebar
const navbarIcon = document.querySelector("#search-icon");

document.addEventListener("click", function (e) {
    if (!navbarIcon.contains(e.target) && !searchBox.contains(e.target)) {
        searchBox.classList.remove("active");
    }
});

// Toggle
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// toggle
// const navbarNav = document.querySelector(".navbar-nav");

// // ketika diklik
// document.querySelector("#hamburger-menu").onclick = () => {
//     navbarNav.classList.toggle("active");
// };

// // ketika klik diluar sidebar
// const hamburger = document.querySelector("#hamburger-menu");

// document.addEventListener("click", function (e) {
//     if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//         navbarNav.classList.remove("active");
//     }
// });
