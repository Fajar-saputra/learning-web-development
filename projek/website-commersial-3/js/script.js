// toggle
const navbarNav = document.querySelector(".navbar-nav");

// ketika diklik
document.querySelector("#hamberger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// ketika klik diluar sidebar
const hamberger = document.querySelector("#hamberger-menu");

document.addEventListener("click", function (e) {
    if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
