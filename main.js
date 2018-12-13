console.log('hi');

$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    let x = $(this).scroll();
    let y = $(this).scrollTop();
});