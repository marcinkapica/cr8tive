$(document).ready(function() {
    triggerMenu();
    triggerSearch();
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

function triggerMenu(){
    var toggleNav = $(".js-toggleNav");
    var menu = $(".js-menu");
    var hamburgerIcon = $(".js-hamburger-icon");
    var closeIcon = $(".js-close-icon");

    toggleNav.click(function(){
        menu.toggleClass("menu--visible");
        hamburgerIcon.toggleClass("navbar__toggle-icon--visible");
        closeIcon.toggleClass("navbar__toggle-icon--visible");
        event.stopPropagation();
  });

    $(document).click(function(){
        menu.removeClass("menu--visible");
        closeIcon.removeClass("navbar__toggle-icon--visible");
        hamburgerIcon.addClass("navbar__toggle-icon--visible");
    });

    $(window).resize(function(){
        menu.removeClass("menu--visible");
        closeIcon.removeClass("navbar__toggle-icon--visible");
        hamburgerIcon.addClass("navbar__toggle-icon--visible");
    });
}

function triggerSearch() {
    var toggleSearch = $(".js-toggleSearch");
    var searchBar = $(".js-searchBar");

    toggleSearch.on("click",function(){
        searchBar.toggleClass("navbar__search-bar--open").focus();
        event.stopPropagation();
        searchBar.on("click",function(){
            event.stopPropagation();
        });
    });

    $(document).on("click", function(){
        searchBar.removeClass("navbar__search-bar--open").focusout();
    });
}
