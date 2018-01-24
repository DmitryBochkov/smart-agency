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
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }]
  });
});
