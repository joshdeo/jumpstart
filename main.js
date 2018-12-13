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
        if ($(this).scrollTop() > 480) {
            $('.navbar').fadeOut(200);
        } else if ($(this).scrollTop() < 419) {
            $('.navbar').fadeIn(500);
        } else {

        };
        console.log($(this).scrollTop());
    });

    /*
    var x = $(window).scroll();
    var y = $(this).scrollTop();
    if (y - x < 50) {
        var z = $('.navbar').css('height');
        var nav = $('.navbar').animate({top: 150 + z}, 
        150, 'easInOut');
    } else if (x - y > 50) {
        $nav.animate({top: $('.navbar').offset().top + 150}, 150);
    } 
    var x = y;
    console.log(x);
    console.log(y);
    */
});