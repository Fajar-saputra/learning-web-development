const navarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

document.querySelector("#hamburger-menu").onclick = () => {
    navarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
    if (!navarNav.contains(e.target) && !hamburger.contains(e.target)) {
        navarNav.classList.remove("active");
    }
});
