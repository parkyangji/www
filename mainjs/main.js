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

 $('.list_esg').after($('.list_esg').clone());
 $('.list_esg li').eq(0).children('.esg_img').addClass('First');

function First() {
   if (position==-630) {
      $('.list_esg li:eq(1)').children('.esg_img').addClass('First');
   } else if (position==-1260) {
      $('.list_esg li:eq(2)').children('.esg_img').addClass('First');
   } else if (position==-1890) {
      $('.list_esg li:eq(3)').children('.esg_img').addClass('First');
   } 
}

 $('.arrow_esg').click(function(e){
   e.preventDefault();
   $('.list_esg li').children('.esg_img').removeClass('First');

   if($(this).is('.left')){
      if(position>=0) {
         $('.box_list_esg').css('left',-2520);
         position=-2520;
      }

      position+=list_width;
      $('.box_list_esg').animate({left:position},'fast',function(){
         if(position>=0) {
            $('.list_esg li').eq(4).children('.esg_img').addClass('First');
            $('.box_list_esg').css('left',-2520);
            position=-2520;
         }
      }).clearQueue();

     First();
   }else if($(this).is('.right')){
      
      if(position<=-2520) {
         $('.box_list_esg').css('left',0); 
         position=0;
      }

      position-=list_width;
      $('.box_list_esg').animate({left:position},'fast',function(){
         if(position<=-2520) {
            $('.list_esg li').eq(0).children('.esg_img').addClass('First');
            $('.box_list_esg').css('left',0);
            position=0;
         }
      }).clearQueue();

      First();
   }
 })





 