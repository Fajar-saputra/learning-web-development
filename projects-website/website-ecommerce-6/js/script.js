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

// single page
let productThumb = new Swiper(".small-image", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        },
    },
});

let productBig = new Swiper(".big-image", {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productThumb,
    },
});

const seacrhButton = document.querySelector(".t-search"),
    tClose = document.querySelector(".search-close"),
    showClass = document.querySelector(".site");

seacrhButton.addEventListener("click", () => {
    showClass.classList.toggle("showsearch");
});

tClose.addEventListener("click", () => {
    showClass.classList.toggle("showsearch");
});

// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
    dptClass = document.querySelector(".site");
dptButton.addEventListener("click", () => {
    dptClass.classList.toggle("showdpt");
});

// stock products bar width percentase
// function lama
// function updateStockBars() {
//     const stocks = document.querySelectorAll(".page-single .stock");

//     stocks.forEach(stock => {
//         const available = parseInt(stock.querySelector(".qty-available").innerHTML, 10);
//         const sold = parseInt(stock.querySelector(".qty-sold").innerHTML, 10);
//         const percent = (available * 100) / sold;

//         stock.querySelector(".available").style.width = percent + "%";
//     });
// }

// function yang sudah dioptimasi
function updateStockBars() {
    const stocks = document.querySelectorAll(".stock");

    stocks.forEach((stock) => {
        const available = parseInt(stock.querySelector(".qty-available").innerHTML, 10);
        const sold = parseInt(stock.querySelector(".qty-sold").innerHTML, 10);
        const total = available + sold; // Total stok

        // Hitung persentase stok yang tersedia
        const percent = (available / total) * 100;

        // Terapkan lebar ke elemen progress bar
        stock.querySelector(".available").style.width = percent + "%";
    });
}

// Panggil fungsi
updateStockBars();

// Show modal on load
window.onload = function () {
    document.querySelector(".site").classList.add("showmodal");
};

// Close modal
const modalCloseButton = document.querySelector(".modalclose");
const modalElement = document.querySelector(".site");
modalCloseButton.addEventListener("click", () => {
    modalElement.classList.remove("showmodal");
});


// filter pada page page category
// open
const FtoShow = ".filter";
const Fpopup = document.querySelector(FtoShow);
const Ftrigger = document.querySelector(".filter-trigger");

Ftrigger.addEventListener("click", () => {
    setTimeout(() => {
        if (Fpopup.classList.contains("show")) {
            Fpopup.classList.remove("show");
        } else {
            Fpopup.classList.add("show");
        }
    }, 250);
});

// auto close by click outside .filter
document.addEventListener("click", (e) => {
    const IsClose = e.target.closest(FtoShow);
    if (!IsClose && Fpopup.classList.contains("show")) {
        Fpopup.classList.remove("show");
    }
});

// show cart on click (mobile)
const DivToShow = ".mini-cart";
const DivPopup = document.querySelector(DivToShow);
const DivTrigger = document.querySelector(".cart-trigger");

DivTrigger.addEventListener("click", () => {
    setTimeout(() => {
        if (!DivPopup.classList.contains("show")) {
            DivPopup.classList.add("show");
        }
    }, 250);
});

// close cart
document.addEventListener("click", (e) => {
    const IsClose = e.target.closest(DivToShow);
    if (!IsClose && DivPopup.classList.contains("show")) {
        DivPopup.classList.remove("show");
    }
});

// show modal on load
window.onload = function () {
    document.querySelector(".site").classList.toggle("showmodal");
};

document.querySelector(".modalclose").addEventListener("click", () => {
    document.querySelector(".site").classList.remove("showmodal");
});
