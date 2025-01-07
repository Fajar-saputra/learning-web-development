// copy menu for mobile
function copyMenu() {
    const dptCategory = document.querySelector(".dpt-cat");
    const dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    const mainNav = document.querySelector(".header-nav nav");
    const navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to thetop-nav
    const topNav = document.querySelector(".header-top .wrapper");
    const topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector(".trigger"),
    closeButton = document.querySelector(".t-close"),
    addClass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
    addClass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
    addClass.classList.remove("showmenu");
});

// show sub menu on mobile
const subMenu = document.querySelectorAll(".has-child .icon-small");
subMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => (item != this ? item.closest(".has-child").classList.remove("expand") : null));
    if (this.closest(".has-child").classList != "expand");
    this.closest(".has-child").classList.toggle("expand");
}

// slider
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
