$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
     stagePadding: 1,
     autoplay: true,
     responsiveClass: true,
     margin: 5,
     dots: false
    });

    $('.nav-link').hover(function () {
        $(this).toggleClass("animated pulse");
      });

  });