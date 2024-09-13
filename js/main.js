$(document).ready(function () {
    $('.gallery-list li').click(function () {
        $('.gallery-list li').removeClass('active')
        $(this).addClass('active')
    })

    $('.gallery-btn').click(function () {
        if ($('.gallery-hiden').hasClass('active')) {
            $('.gallery-hiden').removeClass('active')
        } else {
            $('.gallery-hiden').addClass('active')
        }
    })

    // slider
    $('.block-sliders').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    })

    // btn up

    $(window).scroll(function(){
        if($(this).scrollTop() > 99){
            $(".btn-up").fadeIn()
        } else{
            $(".btn-up").fadeOut()
        }
    })

    $(".btn-up").click(function(){
        $('body, html').animate({
            scrollTop:0
        }, 800)
    })

    // burger menu

    $('.burger').click(function(){
        $('.burger').toggleClass('active')
        $('.nav').toggleClass('active')
        $('body').toggleClass('hiden')
    })

    $(window).scroll(function(){
    let header = $('.header-fixed').offset().top
        // console.log(header);
        if(header >= 99){
            $('.header-fixed').addClass('active')
        } else{
            $('.header-fixed').removeClass('active')
        }
    })
});