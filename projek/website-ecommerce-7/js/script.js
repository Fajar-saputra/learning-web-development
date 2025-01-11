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
    let title = shopProducts.querySelector(".product-title");
    let price = shopProducts.querySelector(".price");
    let productImg = shopProducts.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);

    console.log(title, price, productImg);
}

// bermasalah
function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartItems = document.querySelector(".cart-content");
    let cartItemsName = document.querySelectorAll(".cart-product-title");

    for (let index = 0; index < cartItemsName.length; index++) {
        if (cartItemsName[index].innerText == title) {
            alert("you have already add this item to cart");
            return;
        }
    }

    console.log("tess");

    let cartBoxContent = ` <img src="${productImg}" alt="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- remove -->
                        <i class='bx bxs-trash-alt' id="cart-remove"></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove").addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity").addEventListener("change", quantityChanged);
}

// Fungsi removeCartItem() untuk menghapus item
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();

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
