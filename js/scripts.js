$(window).load(function () {
    // Preloader
    $('.loader').delay(3000).fadeOut('slow');
    $('.loader-mask').delay(3000).fadeOut('slow');
});

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
