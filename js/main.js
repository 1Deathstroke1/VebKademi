//Карусель

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        items: 3,
        responsive: {
            0: {
                margin: 20,
                items: 1
            },
            480: {
                margin: 20,
                items: 2
            },
            600: {
                margin: 20,
                items: 3
            },
        }
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.slider_btn--next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.slider_btn--prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
});


//Nav Icon

const navBtn = document.querySelector('.nav_toggle')
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon')

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toogle('no-scroll')
}

