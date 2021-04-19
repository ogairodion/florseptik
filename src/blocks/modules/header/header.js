import LazyLoad from "vanilla-lazyload";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox"

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad({});

$(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    let scrollStart = $('.header').height();
    if (scrollPosition > scrollStart) {
        $("header").addClass("header__fixed");
    } else {
        $("header").removeClass("header__fixed");
    }
});

$("a.scroll").on("click", function () {
    let link = $(this);
    let headerHeight = $(".header").outerHeight();
    if ($(window).width() < 767 && $(".header__menu").hasClass("header__menu--open")) {
        burger();
    }
    $("html, body").animate({
        scrollTop: $(link.attr("href")).offset().top - headerHeight + "px"
    }, {
        duration: 800
    });
    return false;
});

function burger() {
    $(".header__burger").toggleClass("header__burger--close");
    $(".header__menu").toggleClass("header__menu--open");
    $(".shadow").toggle();

    if ($(".header__menu").hasClass("header__menu--open")) {
        $("body,html").css("overflow", "hidden");
        $('.header__logo').css({
            'margin-left' : '20px',
            'transform' : 'scale(1.1)'
        });
    } else {
        $("body,html").css("overflow", "visible");
        $('.header__logo').css({
            'margin-left' : '0',
            'transform' : 'scale(1)'
        });
    }
}

$(".header__burger").on("click", function () {
    burger();
});

$(".shadow").on("click", function () {
    burger();
});

if ($(window).width() < 1099) {
    $('.header__phones').appendTo($('.header__menu'));
}