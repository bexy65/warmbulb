$(document).ready(function () {
  $(".navbar-nav .nav-item .nav-link").click(function () {
    $(".navbar-nav .nav-item .nav-link").removeClass("my-active");
    $(this).addClass("my-active");
  });

  // $(".glass-nav").on("mousemove", function (e) {
  //   let offset = $(this).offset();
  //   let x = e.pageX - offset.left;
  //   let y = e.pageY - offset.top;

  //   $(this).css("--x", x + "px");
  //   $(this).css("--y", y + "px");
  // });

  // $(".glass-nav").on("mouseleave", function () {
  //   $(this).css("--x", "-1000px");
  //   $(this).css("--y", "-1000px");
  // });
});
