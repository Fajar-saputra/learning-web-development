$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var href = $(this).attr("href");

  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("body").scrollTop(elemenTujuan.offset().top - 50);

  e.preventDefault();
});
