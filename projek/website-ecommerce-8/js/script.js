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
