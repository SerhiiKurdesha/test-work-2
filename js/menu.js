$('.header-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header-btn__active');
    $('.nav').toggleClass('nav__active');
});