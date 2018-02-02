$(document).ready(function() {
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
  });

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
});
