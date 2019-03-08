if ($('.js-image-wrapper').length > 0) {
    objectFitImages('.js-image-wrapper');
}

$('.main-sl').slick({
    fade: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: "<button class='arrow-sl prev'></button>",
    nextArrow: "<button class='arrow-sl next'></button>"
})

// prevArrow: $('.prev'),
// nextArrow: $('.next'),



$('.sl-foot-reviews').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: $('.prev-foot-info'),
    nextArrow: $('.next-foot-info')
})


$('.js-catalog').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $('.prev-arrow-catalog'),
    nextArrow: $('.next-arrow-catalog')
})

// counter
$(document).ready(function () {
    $('.dec').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.inc').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});