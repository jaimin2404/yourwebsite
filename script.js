$(document).ready(function () {
  $(".fa-sliders-h").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
  $(window).on("scroll load", function () {
    $(".fa-sliders-h").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 30) {
      $(".header").css({
        "background-color": "#f72585",
        "box-shadow": "0 0.3rem 0.5rem rgba(0,0,0,0.3)",
      });
    } else {
      $(".header").css({ "background-color": "none", "box-shadow": "none" });
    }
  });

  $(".accordion-header").click(function () {
    // Check if the clicked accordion is already open
    var isOpen = $(this).next(".accordion-body").is(":visible");

    // Close all accordions
    $(".accordion .accordion-body").slideUp();
    $(".accordion .accordion-header span").text("+");

    // If the clicked accordion was closed, open it; otherwise, keep it closed
    if (!isOpen) {
      $(this).next(".accordion-body").slideDown();
      $(this).children("span").text("-");
    }
  });
});

window.addEventListener("scroll", reveal);
function reveal() {
  var revels = document.querySelectorAll(".reveal");

  for (var i = 0; i < revels.length; i++) {
    var windowHeight = window.innerHeight;
    var revelTop = revels[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revelTop < windowHeight - revealPoint) {
      revels[i].classList.add("active");
    } else {
      revels[i].classList.remove("active");
    }
  }
}
