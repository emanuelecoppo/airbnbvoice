$(".arrow-up").click(function(){
  $("html, body").animate({scrollTop: 0}, 700);
  return false;
});

// $(".arrow-down").click(function(){
//   $("html, body").animate({scrollTop: 770}, 500);
//   return false;
// });

$(".arrow-up").fadeOut(0);

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1500) {
      $(".arrow-up").fadeIn(200);
    } else if (scroll < 1500) {
      $(".arrow-up").fadeOut(200);
    }
});

$(".button").click(function(){
  if ($(window).width() >= 700) {
      window.location.href = "desktop.html";
  } else if ($(window).width() < 700) {
      window.location.href = "mobile.html";
  };
  return false;
});
