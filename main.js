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


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 137) {
            $('.navbar').fadeOut(500);
        } else if ($(this).scrollTop() < 137) {
            $('.navbar').fadeIn(500);
        } else {

        };
        console.log($(this).scrollTop());
    });
});