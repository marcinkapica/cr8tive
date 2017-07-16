var searchBar = $(".js-searchBar");
var searchOn = false;
var menu = $(".js-menu");
var hamburgerIcon = $(".js-hamburgerIcon");
var closeIcon = $(".js-closeIcon");

$(document).ready(function(){
    navbarBackground();
    menuToggling();
    searchToggling();
    initCarousel();
    smoothScroll();
});

function navbarBackground(){
    var navbar = $(".js-navbar");
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 0 ) {
            navbar.addClass("navbar--scrolling");
        } else {
            navbar.removeClass("navbar--scrolling");
        }
    });
}

function menuToggling(){
    $(".js-menuToggleButton").click(toggleMenu);
    $(document).click(hideMenu);
    $(window).resize(hideMenu);

    function toggleMenu(){
        searchBar.blur().removeClass("navbar__search-bar--open").attr("tabIndex","-1");
        searchOn = false;
        menu.toggleClass("menu--visible");
        hamburgerIcon.toggleClass("navbar__icon--visible");
        closeIcon.toggleClass("navbar__icon--visible");
        event.stopPropagation();
    }
}

function hideMenu() {
    menu.removeClass("menu--visible");
    closeIcon.removeClass("navbar__icon--visible");
    hamburgerIcon.addClass("navbar__icon--visible");
}

function searchToggling() {
    $(".js-toggleSearchButton").click(function(){
        if (searchOn==false) {
            searchBar.addClass("navbar__search-bar--open").focus().attr("tabIndex","0");
            searchOn = true;
        } else {
            searchBar.removeClass("navbar__search-bar--open").blur().attr("tabIndex","-1");
            searchOn = false;
        }
        event.stopPropagation();
    });
    searchBar.on("click", function(){
        event.stopPropagation();
    });

    $(document).on("click", function() {
        searchBar.removeClass("navbar__search-bar--open").blur().attr("tabIndex", "-1");
        searchOn = false;
    });
}

function smoothScroll() {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        hideMenu();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top - $("#navbar").outerHeight(false)
                }, 1000);
                return false;
            }
        }
    });
}

function initCarousel() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        center: true,
        margin: 20,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:800
    });
}

