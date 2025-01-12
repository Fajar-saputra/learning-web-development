// Menangkap elemen dari HTML
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector("#cart-icon");
const cartClose = document.querySelector("#cart-close");
const cartContent = document.querySelector(".cart-content");
const totalPriceElement = document.querySelector(".total-price");

// Fungsi untuk membuka dan menutup keranjang
const toggleCart = (isOpen) => {
    if (isOpen) {
        cart.classList.add("active");
    } else {
        cart.classList.remove("active");
    }
};

// Event listener untuk membuka dan menutup keranjang
cartIcon.addEventListener("click", () => toggleCart(true));
cartClose.addEventListener("click", () => toggleCart(false));

// Fungsi untuk menambahkan event listener ke elemen-elemen
const addEventListeners = (elements, event, handler) => {
    elements.forEach((element) => {
        element.addEventListener(event, handler);
    });
};

// Fungsi untuk memvalidasi input jumlah barang
const validateQuantity = (input) => {
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
};

// Fungsi untuk memperbarui total harga
const updateTotal = () => {
    let total = 0;
    document.querySelectorAll(".cart-box").forEach((cartBox) => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".cart-quantity");

        const price = parseFloat(priceElement.innerText.replace("ID", "").replace(/\./g, "").trim());
        const quantity = parseInt(quantityElement.value);

        total += price * quantity;
    });

    totalPriceElement.innerText = "ID " + total.toLocaleString("id-ID");
};

// Fungsi untuk menghapus item dari keranjang
const removeCartItem = (event) => {
    event.target.closest(".cart-box").remove();
    updateTotal();
};

// Fungsi untuk menambahkan produk ke keranjang
const addProductToCart = (title, price, productImg) => {
    // Cek apakah produk sudah ada di keranjang
    const cartItemsName = document.querySelectorAll(".cart-product-title");
    if (Array.from(cartItemsName).some((item) => item.innerText === title)) {
        alert("You have already added this item to the cart");
        return;
    }

    // Membuat elemen produk baru di keranjang
    const cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    cartShopBox.innerHTML = `
        <img src="${productImg}" alt="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bxs-trash-alt cart-remove"></i>`;

    // Tambahkan elemen ke keranjang
    cartContent.append(cartShopBox);

    // Tambahkan event listener ke elemen baru
    cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
    cartShopBox.querySelector(".cart-quantity").addEventListener("change", (event) => {
        validateQuantity(event.target);
        updateTotal();
    });

    updateTotal();
};

// Fungsi untuk menangani klik tombol "Add to Cart"
const addCartClicked = (event) => {
    const button = event.target;
    const shopProducts = button.parentElement;

    const title = shopProducts.querySelector(".product-title").innerText;
    const price = shopProducts.querySelector(".price").innerText;
    const productImg = shopProducts.querySelector(".product-img").src;

    addProductToCart(title, price, productImg);
    toggleCart(true);
};

// Fungsi untuk menangani klik tombol "Buy"
const buyButtonClicked = () => {
    alert("Your order is placed");
    while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
};

// Fungsi ready untuk inisialisasi event listener
const ready = () => {
    addEventListeners(document.querySelectorAll("#cart-remove"), "click", removeCartItem);
    addEventListeners(document.querySelectorAll(".cart-quantity"), "change", (event) => {
        validateQuantity(event.target);
        updateTotal();
    });
    addEventListeners(document.querySelectorAll(".add-cart"), "click", addCartClicked);

    const buyButton = document.querySelector(".btn-buy");
    if (buyButton) {
        buyButton.addEventListener("click", buyButtonClicked);
    }
};

// Pastikan JavaScript berjalan setelah konten HTML dimuat
document.addEventListener("DOMContentLoaded", ready);
