//= jquery-1.12.4.min.js
//= bootstrap.min.js

$(document).ready(function() {
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
  });
});
