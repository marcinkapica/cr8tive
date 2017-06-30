$(document).ready(function() {
  triggerMenu();
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0 ) {
        $(".js-navbar").addClass("navbar--scrolling");
    } else {
        $(".js-navbar").removeClass("navbar--scrolling");
    }
});


var triggerMenu = function(){
  $('.js-toggleNav').on('click',function(){
    $(".js-menu").toggleClass("menu--visible", 250);
    $(".js-hamburger-icon").toggleClass("navbar__toggle-icon--visible", 250);
    $(".js-close-icon").toggleClass("navbar__toggle-icon--visible", 250);
  });
}
