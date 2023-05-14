// 컨텐츠 스크롤 이벤트

window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  const section = document.querySelectorAll('section');

  for (var i = 0; i < section.length; i++) {
    if (scroll > section[i].offsetTop - 700) {
      section[i].classList.add('scroll_ani');
    }
  }
})

/* JQUREY 버전

$(window).on('scroll', function() {
   var scroll = $(window).scrollTop();
   var section = $('section');

    for (var i=0; i<section.length; i++) {
        if (scroll > section.eq(i).offset().top - 700) {
            section.eq(i).addClass('scroll_ani');
        }
    }
 })

*/



// 제품소개

const open_btn = document.querySelectorAll('.open_btn');
const productsArr = Object.values(document.querySelector('.products').children);
const infoArr = document.querySelectorAll('.info');

function active_class(num) {

  for (j = 0; j < productsArr.length; j++) {
    productsArr[j].firstElementChild.classList.remove('active');
  }
  productsArr[num].firstElementChild.classList.add('active');

  for (k = 0; k < infoArr.length; k++) {
    if (k == (num)) {
      for (j = 0; j < infoArr[num].children.length; j++) {
        infoArr[num].children[j].classList.add('active');
      }
    } else {
      for (j = 0; j < infoArr[k].children.length; j++) {
        infoArr[k].children[j].classList.remove('active');
      }
    }
  }

}


open_btn.forEach(function (a, i) {

  a.addEventListener('mouseover', function () {

    if (i == 0) {
      productsArr[1].style.left = '600px';
      productsArr[2].style.left = '700px';
      productsArr[3].style.left = '800px';
      active_class(0);

    } else if (i == 1) {
      productsArr[1].style.left = '100px';
      productsArr[2].style.left = '700px';
      productsArr[3].style.left = '800px';
      active_class(1);

    } else if (i == 2) {
      productsArr[1].style.left = '100px';
      productsArr[2].style.left = '200px';
      productsArr[3].style.left = '800px';
      active_class(2);

    } else if (i == 3) {
      productsArr[1].style.left = '100px';
      productsArr[2].style.left = '200px';
      productsArr[3].style.left = '300px';
      active_class(3);

    }
  })
})

/* JQUREY 버전
   
   function span_width(num) {
      $('.products img').not(':eq('+num+')').removeClass('active');
      $('.products img').eq(num).addClass('active');

      $('.info').not(':eq('+num+')').children().removeClass('active');
      $('.info').eq(num).children().addClass('active');
   }

   $('.products li span').mouseenter(function(event){
      var $target=$(event.target);

      if($target.is('.products li span:eq(0)')){
         $('.products li:eq(1)').animate({left:[600,'linear']},100).clearQueue();
         $('.products li:eq(2)').animate({left:[700,'linear']},100).clearQueue();
         $('.products li:eq(3)').animate({left:[800,'linear']},100).clearQueue();
         span_width(0);
      }else if($target.is('.products li span:eq(1)')){
         $('.products li:eq(1)').animate({left:[100,'linear']},100).clearQueue();
         $('.products li:eq(2)').animate({left:[700,'linear']},100).clearQueue();
         $('.products li:eq(3)').animate({left:[800,'linear']},100).clearQueue();
         span_width(1);
      }else if($target.is('.products li span:eq(2)')){
         $('.products li:eq(1)').animate({left:[100,'linear']},100).clearQueue();
         $('.products li:eq(2)').animate({left:[200,'linear']},100).clearQueue();
         $('.products li:eq(3)').animate({left:[800,'linear']},100).clearQueue();
         span_width(2);
      }else if($target.is('.products li span:eq(3)')){
         $('.products li:eq(1)').animate({left:[100,'linear']},100).clearQueue();
         $('.products li:eq(2)').animate({left:[200,'linear']},100).clearQueue();
         $('.products li:eq(3)').animate({left:[300,'linear']},100).clearQueue();
         span_width(3);
      }
   });

*/



 
 //ESG 경영

 let position = 0;
 let Move = 0;
 const box_list_esg = document.querySelector('.box_list_esg');
 const list_esg = document.querySelector('.list_esg');
 const list_width = list_esg.children[0].clientWidth;
 const arrow_esg = document.querySelectorAll('.arrow_esg');

 list_esg.after(list_esg.cloneNode(true));

 const list_esg_clone = document.querySelectorAll('.list_esg');
 const listArr = list_esg_clone.children;
 const imgArr = document.querySelectorAll('.esg_img');


 function First_add(num) {
   imgArr[num].classList.add('First');
   imgArr[num].children[0].classList.add('First');
 }

 First_add(0);


 arrow_esg.forEach(function (a, i) {
   a.addEventListener('click', function (e) {
     e.preventDefault();

     for (let i = 0; i < imgArr.length; i++) {
       imgArr[i].classList.remove('First');
       imgArr[i].children[0].classList.remove('First');
     }

     if (i == 0) {

       if (position == 0) {
         position = -2520;
         Move = -2520;
       }

       position += list_width;

       let leftinterval = setInterval(function () {
         Move += 10;
         box_list_esg.style.left = Move + 'px';

         if (Move >= position) {
           clearInterval(leftinterval);
           if (position == 0) {
             position = -2520;
             Move = -2520;
           }
         }
       }, 1);


     } else if (i == 1) {

       if (position == -2520) {
         position = 0;
         Move = 0;
       }

       position -= list_width;


       let rightinterval = setInterval(function () {
         Move -= 10;
         box_list_esg.style.left = Move + 'px';

         if (Move <= position) {
           clearInterval(rightinterval);
           if (position == -2520) {
             position = 0;
             Move = 0;
           }
         }
       }, 1);

     }

     switch (position) {
       case 0:
         First_add(0);
         break;
       case -630:
         First_add(1);
         break;
       case -1260:
         First_add(2);
         break;
       case -1890:
         First_add(3);
         break;
       case -2520:
         First_add(4);
         break;
     }

   })
 })


 

 /* JQUERY 버전

   var position = 0;
   var list_width = $('.list_esg li').width();

   function First_add(num) {  //첫 이미지 클래스 추가 함수
      $('.list_esg li').eq(num).find('.esg_img').addClass('First').find('img').addClass('First');
   }

   $('.list_esg').after($('.list_esg').clone());
   $('.list_esg li').eq(0).find('.esg_img').addClass('First').find('img').addClass('First');


   $('.arrow_esg').click(function(e){
      e.preventDefault();
      $('.list_esg li').find('.esg_img').removeClass('First').find('img').removeClass('First');


      if($(this).is('.left')){
         if(position>=0) {
            $('.box_list_esg').css('left',-2520);
            position=-2520;
         }

         position+=list_width;

         $('.box_list_esg').animate({left:position},'fast',function(){
            if(position>=0) {
               First_add(4);
               $('.box_list_esg').css('left',-2520);
               position=-2520;
            }
         }).clearQueue();

      }else if($(this).is('.right')){
         if(position<=-2520) {
            $('.box_list_esg').css('left',0); 
            position=0;
         }

         position-=list_width;
         
         $('.box_list_esg').animate({left:position},'fast',function(){
            if(position<=-2520) {
               First_add(0);
               $('.box_list_esg').css('left',0);
               position=0;
            }
         }).clearQueue();
      }

         switch(position) {
            case -630 : First_add(1);
               break;
            case -1260 : First_add(2);
               break;
            case -1890 : First_add(3);
               break;
         }
   });
*/





 