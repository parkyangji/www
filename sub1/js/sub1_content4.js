$('.tabs .tab').eq(0).addClass('current');

$('.tab').click(function(e){
    e.preventDefault();
    $('.tab').removeClass('current');
    $(this).addClass('current');

    var value=0;

    if($(this).hasClass('tab1')){  
    value= $('.cont').eq(0).offset().top-90; 
    }else if($(this).hasClass('tab2')){
    value= $('.cont').eq(1).offset().top-90; 
    }else if($(this).hasClass('tab3')){
    value= $('.cont').eq(2).offset().top-90; 
    }else if($(this).hasClass('tab4')){
    value= $('.cont').eq(3).offset().top-90; 
    }
    
$("html,body").stop().animate({"scrollTop":value},1000);
});

// 스크롤시
var navTop = $('.tabs').offset().top;
var history1 = $('#history1').offset().top-300;
var history2 = $('#history2').offset().top-300;
var history3 = $('#history3').offset().top-300;
var history4 = $('#history4').offset().top-300;

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if(navTop<scroll){
        $('.tabs').addClass('navOn');
        $('#headerArea').fadeOut('slow');
        $('#history1').css('margin-top','352px')

    }else {
        $('.tabs').removeClass('navOn');
        $('#headerArea').fadeIn('slow');
        $('#history1').css('margin-top','0')
    }



})
