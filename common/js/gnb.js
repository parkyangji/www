//글로벌네비게이션 코드 작성

//2depth 열기/닫기
$('ul.dropdownmenu').hover(
    function() { 
    $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
    $('#headerArea').addClass('line');
    $('#headerArea').animate({height:350},'fast').clearQueue();
    },function() {
    $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
    $('#headerArea').removeClass('line');
    $('#headerArea').animate({height:90},'normal').clearQueue();
});

//tab 처리
$('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
    $('ul.dropdownmenu li.menu ul').slideDown('normal');
    $('#headerArea').animate({height:350},'fast').clearQueue();
});

$('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
    $('ul.dropdownmenu li.menu ul').slideUp('fast');
    $('#headerArea').animate({height:90},'normal').clearQueue();
});

//스크롤이벤트

var smh=$('.visual').height();

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수

    if(scroll<smh-90){
        $('#headerArea').css('box-shadow','none');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        $('#headerArea').css('box-shadow','0 0 5px rgba(0,0,0,.6)');
    }; 
})

//패밀리사이트
$('.family .open').toggle(function(){
    $('.family .open').addClass('on');
    $('.family ul').slideDown('200');
},function(){
    $('.family .open').removeClass('on');
    $('.family ul').slideUp('200');
});

//tab키 처리
  $('.family .open').on('focus', function () {   
    $('.family .open').addClass('on');     
    $('.family ul').slideDown('200');
   });
   $('.family li:last a').on('blur', function () {  
    $('.family .open').removeClass('on');      
    $('.family ul').slideUp('200');
   });

