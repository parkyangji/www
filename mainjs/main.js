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

 