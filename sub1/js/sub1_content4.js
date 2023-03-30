// 스크롤시
const tabs = document.querySelector('.tabs');
const tabArr = document.querySelectorAll('.tab');
const contArr = document.querySelectorAll('.cont');

let navTop = tabs.offsetTop;
let history1 = contArr[0].offsetTop-72;
let history2 = contArr[1].offsetTop-72;
let history3 = contArr[2].offsetTop-72;
let history4 = contArr[3].offsetTop-72;


//탭 클릭시


tabArr.forEach(function(a, i) {
    a.addEventListener('click', function(e) {
        e.preventDefault();

        for (let j=0; j<tabArr.length; j++) {
            tabArr[j].classList.remove('current');
        }

        tabArr[i].classList.add('current');

        let value = 0;
        

        if (i==0) {
            value = history1;
        } else if (i==1) {
            value = history2;

        } else if (i==2) {
            value = history3;
        } else if (i==3) {
            value = history4;
        }

        window.scrollTo({top:value, left:0, behavior:"smooth"});

    })
})




/* JQUERY 버전 

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

*/

window.addEventListener('scroll', function() {

    //네비 고정

    if(navTop-200<scroll) {
        headerArea.style.display = 'none';
        tabs.classList.add('navOn');
        contArr[0].style.marginTop = '352px'

    } else {
        headerArea.style.display = 'block';
        tabs.classList.remove('navOn');
        contArr[0].style.marginTop = '0'
    }


    //탭 스크롤시

    for(let i=0; i<tabArr.length; i++) {
        tabArr[i].classList.remove('current');
        contArr[i].children[0].children[0].classList.remove('textFixed');
    }


    if (scroll>=history1 && scroll<history2) {
        tabArr[0].classList.add('current');
        contArr[0].children[0].children[0].classList.add('textFixed');
    } else if (scroll>=history2 && scroll<history3) {
        tabArr[1].classList.add('current');
        contArr[1].children[0].children[0].classList.add('textFixed');
    } else if (scroll>=history3 && scroll<history4) {
        tabArr[2].classList.add('current');
        contArr[2].children[0].children[0].classList.add('textFixed');
    } else if (scroll>=history4) {
        tabArr[3].classList.add('current');
        contArr[3].children[0].children[0].classList.add('textFixed');
    } else if (scroll<history1) {
        tabArr[0].classList.add('current');
    }



})

/* JQUERY 버전 

var navTop = $('.tabs').offset().top;

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();


    if(navTop-200<scroll){
        $('.tabs').addClass('navOn');
        $('#headerArea').fadeOut('slow');
        $('#history1').css('margin-top','352px');

    }else {
        $('.tabs').removeClass('navOn');
        $('#headerArea').fadeIn('slow');
        $('#history1').css('margin-top','0');
    }


    $('.tab').removeClass('current');
    $('.cont').find('h3').removeClass('textFixed');

    if (scroll>=history1 && scroll<history2) {
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
    } else if (scroll<history1) {
        $('.tab1').addClass('current');
    }
})

*/


