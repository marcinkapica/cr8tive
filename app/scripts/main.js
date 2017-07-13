$(document).ready(function() {
    initCarousel();
    smoothScroll();
    triggerSearch();
    triggerMenu();
    searchBar = $(".js-searchBar");
    searchOn = false;
});

$(window).scroll(function() {
    var navbar = $(".js-navbar");
    var scroll = $(window).scrollTop();

    if (scroll > 0 ) {
        navbar.addClass("navbar--scrolling");
    } else {
        navbar.removeClass("navbar--scrolling");
    }
});

function smoothScroll() {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        $(".js-menu").removeClass("menu--visible");
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

function triggerMenu(){
    var toggleNav = $(".js-toggleNav");
    var menu = $(".js-menu");
    var hamburgerIcon = $(".js-hamburger-icon");
    var closeIcon = $(".js-close-icon");

    toggleNav.click(function(){
        searchBar.blur().removeClass("navbar__search-bar--open").attr("tabIndex","-1");
        searchOn = false;
        menu.toggleClass("menu--visible");
        hamburgerIcon.toggleClass("navbar__icon--visible");
        closeIcon.toggleClass("navbar__icon--visible");
        event.stopPropagation();
    });

    $(document).click(function(){
        menu.removeClass("menu--visible");
        closeIcon.removeClass("navbar__icon--visible");
        hamburgerIcon.addClass("navbar__icon--visible");
    });

    $(window).resize(function(){
        menu.removeClass("menu--visible");
        closeIcon.removeClass("navbar__icon--visible");
        hamburgerIcon.addClass("navbar__icon--visible");
    });
}

function triggerSearch() {
    var toggleSearch = $(".js-toggleSearch");
    toggleSearch.on("click",function(){
        if (searchOn==false) {
            searchBar.addClass("navbar__search-bar--open").focus().attr("tabIndex","0");
            searchOn = true;
        } else {
            searchBar.removeClass("navbar__search-bar--open").blur().attr("tabIndex","-1");
            searchOn = false;
        }
        event.stopPropagation();
        searchBar.on("click",function(){
            event.stopPropagation();
        });
    });

    $(document).on("click", function(){
        searchBar.blur().removeClass("navbar__search-bar--open").attr("tabIndex","-1");
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

