$(document).ready(function () {
  //Learn More button animation
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      700,
      "linear"
    );
  });

  //Popups
  $(".popup-open").click(function () {
    var id = $(this).data("target");
    $("#" + id).addClass("open");
    $("#" + id + "-content").addClass("appear");
  });

  $(".popup-close").click(function () {
    var id = $(this).data("target");
    $("#" + id).toggleClass("open");
    $("#" + id + "-content").toggleClass("appear");
  });

  $(".popup").click(function (e) {
    if (e.target == this) {
      $(".popup").removeClass("open");
      $(".popup__content").removeClass("appear");
    }
  });
});
