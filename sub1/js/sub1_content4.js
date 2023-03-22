var history1 = $('.cont').eq(0).offset().top-72;
var history2 = $('.cont').eq(1).offset().top-72;
var history3 = $('.cont').eq(2).offset().top-72;
var history4 = $('.cont').eq(3).offset().top-72;


//탭 클릭시
$('.tab').click(function(e){
    e.preventDefault();
    $('.tab').removeClass('current');
    $(this).addClass('current');

    var value=0;

    if($(this).hasClass('tab1')){  
    value= history1; 
    }else if($(this).hasClass('tab2')){
    value= history2; 
    }else if($(this).hasClass('tab3')){
    value= history3; 
    }else if($(this).hasClass('tab4')){
    value= history4; 
    }
    
$("html,body").stop().animate({"scrollTop":value},1000);
});

// 스크롤시
var navTop = $('.tabs').offset().top;

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    var scrollEnd = $(document).height() - $(window).height()

    //네비 고정
    if(navTop<scroll){
        $('.tabs').addClass('navOn');
        $('#headerArea').fadeOut('slow');
        $('#history1').css('margin-top','352px');

    }else {
        $('.tabs').removeClass('navOn');
        $('#headerArea').fadeIn('slow');
        $('#history1').css('margin-top','0');
    }

    //탭 스크롤시
    $('.tab').removeClass('current');
    $('.cont').find('h3').removeClass('textFixed');

    if (scroll<history2) {
        $('.tab1').addClass('current');
        $('.cont').eq(0).find('h3').addClass('textFixed');
    } else if (scroll>=history2 && scroll<history3) {
        $('.tab2').addClass('current');
        $('.cont').eq(1).find('h3').addClass('textFixed');
    } else if (scroll>=history3 && scroll<history4) {
        $('.tab3').addClass('current');
        $('.cont').eq(2).find('h3').addClass('textFixed');
    } else if (scroll>=history4) {
        $('.tab4').addClass('current');
        $('.cont').eq(3).find('h3').addClass('textFixed');
    }
})
