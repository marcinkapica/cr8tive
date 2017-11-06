var searchBar = $('.js-searchBar');
var searchOn = false;
var menu = $('.js-menu');
var hamburgerIcon = $('.js-hamburgerIcon');
var closeIcon = $('.js-closeIcon');

function navbarBackground() {
  var navbar = $('.js-navbar');
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance > 0) {
      navbar.addClass('navbar--scrolling');
    } else {
      navbar.removeClass('navbar--scrolling');
    }
  });
}

function hideMenu() {
  menu.removeClass('menu--visible');
  closeIcon.removeClass('navbar__icon--visible');
  hamburgerIcon.addClass('navbar__icon--visible');
}

function menuToggling() {
  function toggleMenu(event) {
    searchBar.blur().removeClass('navbar__search-bar--open').attr('tabIndex', '-1');
    searchOn = false;
    menu.toggleClass('menu--visible');
    hamburgerIcon.toggleClass('navbar__icon--visible');
    closeIcon.toggleClass('navbar__icon--visible');
    event.stopPropagation();
  }

  $('.js-menuToggleButton').click(toggleMenu);
  $(document).click(hideMenu);
  $(window).resize(hideMenu);
}

function searchToggling() {
  function hideSearchBar() {
    searchBar.removeClass('navbar__search-bar--open').blur().attr('tabIndex', '-1');
    searchOn = false;
  }

  function showSearchBar() {
    searchBar.addClass('navbar__search-bar--open').focus().attr('tabIndex', '0');
    searchOn = true;
  }

  $('.js-toggleSearchButton').click(function(event) {
    if (searchOn === false) {
      showSearchBar();
    } else {
      hideSearchBar();
    }
    event.stopPropagation();
  });

  searchBar.on('click', function(event) {
    event.stopPropagation();
  });

  $(document).on('click', function() {
    hideSearchBar();
  });
}

function smoothScroll() {
  jQuery("a[href*='#']:not([href='#'])").click(function() {
    var target = jQuery(this.hash);
    hideMenu();
    if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        jQuery('html, body').animate({
          scrollTop: target.offset().top - $('#navbar').outerHeight(false)
        }, 1000);
        return false;
      }
    }
    return false;
  });
}

function initCarousel() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    center: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 800
  });
}

$(document).ready(function() {
  navbarBackground();
  menuToggling();
  searchToggling();
  initCarousel();
  smoothScroll();
});
