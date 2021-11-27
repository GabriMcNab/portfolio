document.addEventListener("DOMContentLoaded", function (event) {
  var openButtons = document.querySelectorAll(".popup-open");

  openButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      var id = e.target.getAttribute("data-target");
      document.getElementById(id).classList.add("open");
      document.getElementById(id + "-content").classList.add("appear");
    });
  });

  var closeButtons = document.querySelectorAll(".popup-close");

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      var id = e.target.getAttribute("data-target");
      document.getElementById(id).classList.toggle("open");
      document.getElementById(id + "-content").classList.toggle("appear");
    });
  });

  var popups = document.querySelectorAll(".popup");

  popups.forEach(function (popup) {
    popup.addEventListener("click", function (e) {
      var id = e.target.getAttribute("data-target");
      document.getElementById(id).classList.remove("open");
      document.getElementById(id + "-content").classList.remove("appear");
    });
  });
});
