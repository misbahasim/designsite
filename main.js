$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on("load scroll", function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
            $('header').css({ 'background': '#6C5CE7', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    });

    $('.accordion-header').click(function () {
        $('.accordion .acccordion-body').slideUp();
        $(this).next('.acccordion-body').slideDown('fast');
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});