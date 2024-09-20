function fadeAnime(){
    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
        }
    });
}

$(window).on('load' , function(){
    fadeAnime();
});

$(window).scroll(function(){
    fadeAnime();
});

