document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('#menu');
    const navbar = document.querySelector('.navbar');

    // Fungsi untuk toggle menu aktif
    menuIcon.addEventListener('click', function (event) {
        navbar.classList.toggle('menu-active');
        event.stopPropagation(); // Mencegah klik event menyebar ke dokumen
    });

    // Menutup navbar jika klik di luar navbar atau menu icon
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove('menu-active');
        }
    });
});

// Menangkap elemen dari HTML
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector("#cart-icon");
const cartClose = document.querySelector("#cart-close");

// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close cart
cartClose.onclick = () => {
    cart.classList.remove("active");
};

// Memastikan JavaScript berjalan setelah konten HTML dimuat
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Fungsi ready() untuk menambahkan event listener pada tombol-tombol dalam keranjang
function ready() {
    let removeCart = document.querySelectorAll("#cart-remove");

    removeCart.forEach((button) => {
        button.addEventListener("click", removeCartItem);
    });

    // Change quantity
    let quantityinputs = document.querySelectorAll(".cart-quantity");
    quantityinputs.forEach((input) => {
        input.addEventListener("change", quantityChanged);
    });

    // add to cart
    let addCart = document.querySelectorAll(".add-cart");
    addCart.forEach((button) => {
        button.addEventListener("click", addCartClicked);
    });

    // buy button working
    document.querySelector(".btn-primary").addEventListener("click", buyButtonClicked);
}

function buyButtonClicked() {
    alert("Your order is placed");
    let cartContent = document.querySelector(".cart-content");
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// Fungsi quantityChanged() untuk memperbarui jumlah
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateTotal();
}

//  add to cart
function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;

    // Mengambil teks dari elemen
    let title = shopProducts.querySelector(".product-title").innerText;
    let price = shopProducts.querySelector(".price").innerText;
    let productImg = shopProducts.querySelector(".product-img").src;

    // Panggil fungsi untuk menambahkan produk ke keranjang
    addProductToCart(title, price, productImg);

    // Debugging: Pastikan data yang benar dicetak ke konsol
    console.log("Title:", title, "Price:", price, "Image Source:", productImg);
}

// bermasalah
function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartItems = document.querySelector(".cart-content");
    let cartItemsName = document.querySelectorAll(".cart-product-title");

    // Cek apakah produk sudah ada di keranjang
    for (let index = 0; index < cartItemsName.length; index++) {
        if (cartItemsName[index].innerText === title) {
            alert("You have already added this item to the cart");
            return;
        }
    }

    console.log("Adding product to cart");

    // Konten HTML untuk produk di keranjang
    let cartBoxContent = `
        <img src="${productImg}" alt="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bxs-trash-alt cart-remove"></i>`;

    cartShopBox.innerHTML = cartBoxContent;

    // Tambahkan elemen produk ke dalam keranjang
    cartItems.append(cartShopBox);

    // Tambahkan event listener ke tombol hapus
    cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);

    // Tambahkan event listener ke input kuantitas
    cartShopBox.querySelector(".cart-quantity").addEventListener("change", quantityChanged);
}

// Fungsi removeCartItem() untuk menghapus item
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    console.log("tess hapus");
    updateTotal();
}

// Fungsi updateTotal() untuk menghitung total harga
function updateTotal() {
    let cartContent = document.querySelector(".cart-content");
    let cartBoxes = document.querySelectorAll(".cart-box");
    let total = 0;

    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let quantityElement = cartBox.querySelector(".cart-quantity");

        let price = parseFloat(priceElement.innerText.replace("ID", "").replace(/\./g, "").trim());
        let quantity = parseInt(quantityElement.value);

        console.log(price, quantity); // Debugging output

        total += price * quantity;
    });

    console.log("Total: ", total); // Debugging output
    document.querySelector(".total-price").innerText = "ID " + total.toLocaleString("id-ID");
}
