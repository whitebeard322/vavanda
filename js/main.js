jQuery(function($) {
    $('.main-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true

    });


    $('.btn-menu').on('click', function() {
        $('.header-nav').addClass('open');
    });
    $('.btn-menu__close').on('click', function() {
        $('.header-nav').removeClass('open');
    })
});