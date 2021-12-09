$(document).ready(function () {
  // card 1
  $("#strip1").mouseenter(function () {
    $(".cstrip1").css("color", "yellow");
  });
  $("#strip1").mouseleave(function () {
    $(".cstrip1").css("color", "white");
  });

  // click change warna
  $("#strip1").click(function () {
    // $("#strip1").css("background", "red");
    // $("#strip1").toggleClass("changecard");
    $("strip1").toggleClass("changecard");
  });

  // ======================================================
  // card 2
  $("#strip2").mouseenter(function () {
    $(".cstrip2").css("color", "yellow");
  });
  $("#strip2").mouseleave(function () {
    $(".cstrip2").css("color", "white");
  });

  // ======================================================
  // card 3
  $("#strip3").mouseenter(function () {
    $(".cstrip3").css("color", "yellow");
  });
  $("#strip3").mouseleave(function () {
    $(".cstrip3").css("color", "white");
  });
});
