// 제품소개

function span_width(num) {
    $('.products li span').not(':eq(' + num + ')').css('width', '186');
    $('.products img:eq(' + num + '), .products .info h4:eq(' + num + ')').addClass('effect');
    $('.products .info a:eq(' + num + ')').stop().fadeIn('slow');
 }

$('.products li span').mouseenter(function(event){
    var $target=$(event.target);

     if($target.is('.products li span:eq(0)')){
        $('.products li:eq(1)').animate({left:[342,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(2)').animate({left:[528,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(3)').animate({left:[714,'easeOutQuad']},350).clearQueue();
        span_width(0);
     }else if($target.is('.products li span:eq(1)')){
        $('.products li:eq(1)').animate({left:[186,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(2)').animate({left:[528,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(3)').animate({left:[714,'easeOutQuad']},350).clearQueue();
        span_width(1);
     }else if($target.is('.products li span:eq(2)')){
        $('.products li:eq(1)').animate({left:[186,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(2)').animate({left:[372,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(3)').animate({left:[714,'easeOutQuad']},350).clearQueue();
        span_width(2);
     }else if($target.is('.products li span:eq(3)')){
        $('.products li:eq(1)').animate({left:[186,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(2)').animate({left:[372,'easeOutQuad']},350).clearQueue();
        $('.products li:eq(3)').animate({left:[558,'easeOutQuad']},350).clearQueue();
        span_width(3);
     }
 });


 $('.products li').mouseleave(function(){
    $('.products li:eq(1)').animate({left:[225,'easeOutQuad']},350).clearQueue();
    $('.products li:eq(2)').animate({left:[450,'easeOutQuad']},350).clearQueue();
    $('.products li:eq(3)').animate({left:[675,'easeOutQuad']},350).clearQueue();
    $('.products li span').css('width', '');

    $('.products img, .products .info h4').removeClass('effect');
    $('.products .info a').hide();

 });

 
 //ESG 경영
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





 