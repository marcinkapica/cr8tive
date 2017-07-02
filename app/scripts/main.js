$(document).ready(function() {
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

function triggerMenu(){
    var toggleNav = $(".js-toggleNav");
    var menu = $(".js-menu");
    var hamburgerIcon = $(".js-hamburger-icon");
    var closeIcon = $(".js-close-icon");

    toggleNav.click(function(){
        searchBar.blur().removeClass("navbar__search-bar--open");
        searchOn = false;
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
    toggleSearch.on("click",function(){
        if (searchOn==false) {
            searchBar.addClass("navbar__search-bar--open").focus();
            searchOn = true;
        } else {
            searchBar.removeClass("navbar__search-bar--open").blur();
            searchOn = false;
        }
        event.stopPropagation();
        searchBar.on("click",function(){
            event.stopPropagation();
        });
    });

    $(document).on("click", function(){
        searchBar.blur().removeClass("navbar__search-bar--open");
    });
}
