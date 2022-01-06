var w=window.innerWidth;

$('.prev').click(function () {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css({marginLeft: -w});
    $('.slide').stop().animate({ marginLeft: 0 }, 800)
});
$('.next').click(function () {
    $('.slide').stop().animate({marginLeft: -w}, 800, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
});