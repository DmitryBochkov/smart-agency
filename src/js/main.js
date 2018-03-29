//= snap.svg-min.js
//= main-svg.js


$(document).ready(function() {
  // wow animation
  new WOW().init();

  // hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function(e) {
   // Toggle class "is-active"
   e.preventDefault();
   hamburger.classList.toggle("is-active");
   $('.nav-overlay').toggleClass('open');

  });

  // menu
  // hamburger.on('click', function(event) {
  //   event.preventDefault();
  //
  // });

  // slick slider
  $('#feedback-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    dotsClass: 'testimonial__dots',
    arrows: true,
    prevArrow: '<button class="testimonial__arrow prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="testimonial__arrow next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    }]
  });

// form submission
  $('#main-form-ajax').submit(function() {
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize()
    })
    .done(function() {
      $(this).find('.form-control').val('');
      // alert('Thanks for the request');
      $('#modal-thanks').modal('show');
      $('#main-form-ajax').trigger('reset');
    });
    return false;
  });
});
