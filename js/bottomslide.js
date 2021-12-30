$('.prev').click(function () {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left', -1150);
    $('.slide').stop().animate({ marginLeft: 0 }, 800)
});
$('.next').click(function () {
    $('.slide').stop().animate({ marginLeft: -1150 }, 800, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
});