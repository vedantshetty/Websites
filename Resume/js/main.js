/**
 * Created by vedant on 4/12/16.
 */
$(function () {
    "use-strict";
    $(".side-nav-left").sideNav({edge: "left", closeOnClick: !1}), $(".side-nav-right").sideNav({
        edge: "right",
        closeOnClick: !1
    }), $(".slider").slider({full_width: !0}), $("ul.tabs").tabs(), $("#fakeLoader").fakeLoader({
        zIndex: 999,
        spinner: "spinner1",
        bgColor: "#ffffff"
    }), $(".collapsible").collapsible({accordion: !1}), $(".image-popup").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade"
    }), $("#owl-testimonial").owlCarousel({slideSpeed: 300, paginationSpeed: 400, singleItem: !0})
});