/*=============== LIGHT BOX ===============*/
const productItems = document.querySelectorAll(".product__img"),
    totalProductItems = productItems.length,
    lightBox = document.querySelector(".lightbox"),
    lightBoxImg = lightBox.querySelector(".lightbox__img"),
    lightBoxClose = lightBox.querySelector(".lightbox__close"),
    lightBoxCounter = lightBox.querySelector(".caption__counter");

let itemIndex = 0;

for (let i = 0; i < totalProductItems; i++) {
    productItems[i].addEventListener("click", () => {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

function nextItem() {
    if (itemIndex == totalProductItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }

    console.log(itemIndex);
}

function toggleLightbox() {
    lightBox.classList.toggle("open");
}

function changeItem() {
    imgSrc = productItems[itemIndex].querySelector(".product__img img").getAttribute("src");

    lightBoxImg.src = imgSrc;
    lightBoxCounter.innerHTML = itemIndex + " of " + totalProductItems;
    console.log(imgSrc);
}

function nextItem() {
    if (itemIndex == totalProductItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalProductItems - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

// close lightbox
lightBox.addEventListener("click", () => {
    if (Event.target === lightBoxClose || Event.target == lightBox) {
        toggleLightbox();
    }
});
