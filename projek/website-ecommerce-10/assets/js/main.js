/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*=============== SHOW CART ===============*/

/*===== CART SHOW =====*/
/* Validate if constant exists */

/*===== CART HIDDEN =====*/
/* Validate if constant exists */

/*=============== SHOW LOGIN ===============*/

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */

/*=============== HOME SWIPER ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== NEW SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== SHOW SCROLL UP ===============*/
function scrollheader() {
    const header = document.querySelector("#header");
    // whin the scroll is greater than 58 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollheader);
/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/

/*=============== STYLE SWITCHER ===============*/
