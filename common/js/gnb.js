// 글로벌 네비게이션
const headerArea = document.querySelector('#headerArea');
const dropdownmenu = document.querySelector('.dropdownmenu');
const depth = document.querySelectorAll('.menu');
const tab_first = document.querySelectorAll('.depth1')[0];
const tab_last = document.querySelector('.m6').lastElementChild.children[1].children[0];

    // 2depth 여닫기
function header_open() {

    for(let i=0; i<depth.length; i++) {
        depth[i].children[1].classList.add('fadeIn');
        depth[i].children[1].style.display = 'block';
    }

    headerArea.classList.add('line');
    headerArea.style.height = "350px";

}

function header_close() {

    for(let i=0; i<depth.length; i++) {
        depth[i].children[1].classList.remove('fadeIn');
        depth[i].children[1].style.display = 'none';
    }

    headerArea.classList.remove('line');
    headerArea.style.height = "90px";

}

dropdownmenu.addEventListener('mouseover', header_open);
dropdownmenu.addEventListener('mouseout', header_close);

        // tab키로 접근시 2depth 여닫기
    tab_first.addEventListener('focus', header_open);
    tab_last.addEventListener('blur', header_close);


/* JQUREY 버전

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

*/

// 헤더 스크롤 이벤트

const smh = document.querySelector('.visual').clientHeight;


window.addEventListener('scroll', function() {
    let scroll = window.scrollY;

    /*if(scroll<smh-90) {
        headerArea.style.boxShadow = "none"
    } else {
        headerArea.style.boxShadow = "0 0 5px rgba(0,0,0,.6)"
    }*/

    headerArea.style.boxShadow = (scroll<smh-90) ? 'none' : '0 0 5px rgba(0,0,0,.6)';
})


/* JQUREY 버전

var smh=$('.visual').height();

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수

    if(scroll<smh-90){
        $('#headerArea').css('box-shadow','none');
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
        $('#headerArea').css('box-shadow','0 0 5px rgba(0,0,0,.6)');
    }; 
})

*/

// 패밀리사이트

const family = document.querySelector('.open');
const family_list = document.querySelector('.open').nextElementSibling;
const family_last = family_list.lastElementChild.children[0]

let click = 0; 

function family_open() {
    family.classList.add('on');
    family_list.classList.add('on');
}

function family_close() {
    family.classList.remove('on');
    family_list.classList.remove('on');
}

family.addEventListener('click', function(e) {
    e.preventDefault();

    click++; // click, focus 이벤트시 focus 이벤트 우선순위 적용으로 toggle 적용 불가
    if (click == 1) {
        family_open()
    } else if (click == 2) {
        family_close()
        click=0
    }

})
    // tab키로 접근시 family_list 여닫기
    family.addEventListener('focus', family_open);
    family_last.addEventListener('blur', family_close);



/* JQUREY 버전

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

*/


// top 상단이동

const topMove = document.querySelector('.topMove');
let scroll = ''

window.addEventListener('scroll', function() {
    let wint = window.innerHeight/5;

    scroll = window.scrollY;
    topMove.style.opacity = (scroll>wint) ? '1' : '0';

})



topMove.addEventListener('click', function(e){
    e.preventDefault();
    scrollToTop();
})


function scrollToTop() {
    let scrollInterval = setInterval(function(){
        if(scroll != 0) {
            window.scrollBy(0, -85);
        }else {
            clearInterval(scrollInterval);
        }
    },10);
}

/* JQUREY 버전

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

*/
