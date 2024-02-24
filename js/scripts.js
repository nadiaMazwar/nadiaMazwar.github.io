// loader
$(window).load(function () {
    // Preloader
    $('.loader').delay(3000).fadeOut('slow');
    $('.loader-mask').delay(3000).fadeOut('slow');
});

// parallax scroll 
// var cp_1pxmv = document.querySelector(".card-1");
var cp_2pxmv = document.querySelector(".card-2");
var cp_3pxmv = document.querySelector(".card-3");
var cp_4pxmv = document.querySelector(".card-4");
// var cp_5pxmv = document.querySelector(".card-5");
var cp_6pxmv = document.querySelector(".card-6");
// var cp_7pxmv = document.querySelector(".card-7");
var cp_8pxmv = document.querySelector(".card-8");
// var cp_9pxmv = document.querySelector(".card-9");

function setTranslate(xPos, yPos, el) {
  // horizontal position (x), vertical position (y), and depth (z)
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
// mobile view
function isMobile() {
  return window.innerWidth <= 767; 
}

// var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
  
  if (!isMobile()) {
    // xScrollPosition = window.scrollX; // will change when scroll page
    yScrollPosition = window.scrollY; // will change when scroll page

    // adjust the position of our background elements
    // setTranslate(0, yScrollPosition * 0, cp_1pxmv); // bayarnow
    setTranslate(0, yScrollPosition * -0.1, cp_2pxmv); // mpaychannel
    setTranslate(0, yScrollPosition * .1, cp_3pxmv); // ipayment
    setTranslate(0, yScrollPosition * -0.2, cp_4pxmv); // mhroads
    // setTranslate(0, yScrollPosition * 0, cp_5pxmv); // aduan
    setTranslate(0, yScrollPosition * 0.1, cp_6pxmv); // tempahan
    // setTranslate(0, yScrollPosition * 0, cp_7pxmv); // combis
    setTranslate(0, yScrollPosition * .13, cp_8pxmv); // mms
    // setTranslate(0, yScrollPosition * 0, cp_9pxmv); // kejuruteraan
  }

  requestAnimationFrame(scrollLoop);
}

