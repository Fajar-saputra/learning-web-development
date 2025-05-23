/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
        console.log("tess");
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/* Validate if constant exists */

/*=============== SHOW CART ===============*/
const cart = document.querySelector("#cart"),
    cartShop = document.querySelector("#cart-shop"),
    cartClose = document.querySelector("#cart-close");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add("show-cart");
    });
}
/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove("show-cart");
    });
}
/*=============== SHOW LOGIN ===============*/
const login = document.querySelector("#login"),
    loginButton = document.querySelector("#login-button"),
    loginClose = document.querySelector("#login-close");
/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add("show-login");
    });
}
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove("show-login");
    });
}
/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollheader() {
    const header = document.querySelector("#header");
    // whin the scroll is greater than 58 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollheader);
/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.querySelector("#scroll-up");
    // when teh scroll is higher tan 350 viewport height, add the swhow scroll class to a tag with the scerool top class
    if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector(".questions__header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions__content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};

/*=============== STYLE SWITCHER ===============*/

// style__switcher-toggler

let styleSwitcherToggler = document.querySelector(".style__switcher-toggler"),
    styleSwitcher = document.querySelector(".style__switcher");

styleSwitcherToggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// Theme colors
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorContainer = document.querySelector(".js-theme-colors");

    themeColorContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors();
        }
    });
    function setColors() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item").classList.remove("active");
        }

        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }
    if (localStorage.getItem("color") !== null) {
        setColors();
    }
    else {
        const defaultColor = colorStyle.getAttribute('href')
        document.querySelector('[data-js-theme-color' + defaultColor + ']').classList.add('active')
    }
}

themeColors();
