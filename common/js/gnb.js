// 글로벌 네비게이션

    //2depth 열기/닫기
    function header_open() {
        $('#headerArea').addClass('line');
        $('#headerArea').animate({height:350},'fast').clearQueue();
    }

    function header_close() {
        $('#headerArea').removeClass('line');
        $('#headerArea').animate({height:90},'fast').clearQueue();
    }


    $('ul.dropdownmenu').hover(
        function() { 
        $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
        header_open();
        },function() {
        $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
        header_close();
    });
    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        header_open();
    });
    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        header_close();
    });

// 스크롤이벤트

var smh=$('.visual').height();

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수

    if(scroll<smh-90){
        $('#headerArea').css('box-shadow','none');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        $('#headerArea').css('box-shadow','0 0 5px rgba(0,0,0,.6)');
    }; 
})

// 패밀리사이트

function family_open() {
    $('.family .open').addClass('on');
    $('.family ul').slideDown('200');
}

function family_close() {
    $('.family .open').removeClass('on');
    $('.family ul').slideUp('200');
}

$('.family .open').toggle(family_open, family_close);
    // tab키 처리
    $('.family .open').focus(family_open);
    $('.family li:last a').blur(family_close);


// top 상단이동

$(window).on('scroll',function(){ 
    var scroll = $(window).scrollTop();
    var wint = $(window).height()/5;

    if(scroll>wint){ 
        $('.topMove').fadeIn('slow');
    }else{
        $('.topMove').fadeOut('fast');
    }
});

$('.topMove').click(function(e){
   e.preventDefault();
   $("html,body").stop().animate({"scrollTop":0},500); 
});
