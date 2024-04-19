

$(".form-check-input").click(function () {
  $("button,h1, h2, h4, h5, p, .nav-link, .bi-facebook, .bi-twitter, .bi-youtube, .bi-instagram,.bi-linkedin").toggleClass("change-text");
  $("body").toggleClass("toggle-btn");
});

$('#slider-1').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true,
        
      },
      600:{
          items:4,
          nav:true,
      },
      1000:{
          items:4,
          nav:true,
      },
      // 1400:{
      //   item:4,
      //   nav:true,
      // }
  }
})
$('#slider-2').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true,
        
      },
      768:{
          items:3,
          nav:true,
      },
      1000:{
          items:4,
          nav:true,
      },
      // 1200:{
      //   item:4,
      //   nav:true,
      // }
  }
})