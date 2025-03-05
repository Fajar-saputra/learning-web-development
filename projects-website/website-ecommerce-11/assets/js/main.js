/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
// var newSwiper = new Swiper(".categories__container", {
//     spaceBetween: 16,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: "true",
// });

var swiper = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});
/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/
