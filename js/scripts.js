// loader
$(window).load(function () {
    // Preloader
    $('.loader').delay(3000).fadeOut('slow');
    $('.loader-mask').delay(3000).fadeOut('slow');
});

// card fade
document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.fade-card');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const st = window.scrollY || document.documentElement.scrollTop;

        // Check scroll direction
        if (st > lastScrollTop) {
            // Scrolling down
            card.classList.add('fade-out');
            card.classList.remove('fade-in');
        } else {
            // Scrolling up
            card.classList.add('fade-in');
            card.classList.remove('fade-out');
        }

        lastScrollTop = st <= 0 ? 0 : st; // Reset last scroll position if at the top
    });
});

// parallex scroll 
$(document).ready(function() {
    //parallax scroll
    $(window).on("load scroll", function() {
      var parallaxElement = $(".parallex"),
        parallaxQuantity = parallaxElement.length;
      window.requestAnimationFrame(function() {
        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
            scrolled = windowTop - elementTop + viewPortHeight;
          currentElement.css({
            transform: "translate3d(0," + scrolled * -0.20 + "px, 0)"
          });
        }
      });
    });
  });

  // move the card when scroll
  function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();