const $navContainer = $("nav");
const $logo = $(".logo");
const $liContainer = $(".li-container li");

$navContainer.animate(
  {
    height: "80px"
  },
  800
);
$logo.animate(
  {
    height: "70px"
  },
  800,
  function() {
    $navContainer.removeClass("nav-animation");
    console.log("end of main animation");
  }
);


