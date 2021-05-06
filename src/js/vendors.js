import "../vendors.css";
import "../scss/style.scss";

import "jquery/dist/jquery";
import "popper.js/dist/umd/popper";
// import "daterangepicker/moment.min.js";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/carousel";

// import "daterangepicker/daterangepicker";
import "owl.carousel/dist/owl.carousel";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


$(".owl-carousel--type1").owlCarousel({
    nav: true,
    dots: false,
    items: 4,
    margin: 15,
});

$(".owl-carousel--type2").owlCarousel({
    nav: true,
    dots: false,
    items: 5,
    margin: 0,
});

var carousel1 = $("#forControls02").carousel();
var carousel2 = $("#forControls03").carousel();
carousel1.on("slide.bs.carousel", function (event) {
    var to = $(event.relatedTarget).index();
    carousel2.carousel(to);
});


// $(function () {
//   $('input[name="datePicker"]').daterangepicker({
//     singleDatePicker: true,
//     autoApply: true,
//     autoUpdateInput: false,
//   });
// });
