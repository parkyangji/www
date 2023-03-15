

var timeonoff;
var imageCount = $('.gallery li').size() //3
var cnt = 1;
var onoff = true;

$('.mbutton').eq(0).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');
$('.gallery li').eq(0).fadeIn('slow');


/* 타이머 */
function move() {
    cnt++;

    $('.gallery li').hide();
    $('.gallery li').eq(cnt-1).fadeIn('slow');

    $('.mbutton').css('background', 'rgba(255, 255, 255, .5)').css('width', '50px');
    $('.mbutton').eq(cnt-1).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');

    if(cnt==imageCount) {cnt=0};

}

timeonoff = setInterval(move, 4000);

/* mbutton */
function m_click(event) {
    var $target = $(event.target);
    clearInterval(timeonoff);

    $(".gallery li").hide();

    if ($target.is(".btn1")) {
        cnt = 1;
      } else if ($target.is(".btn2")) {
        cnt = 2;
      } else if ($target.is(".btn3")) {
        cnt = 3;
      }

    $(".gallery li").eq(cnt-1).fadeIn("slow");

    $('.mbutton').css('background', 'rgba(255, 255, 255, .5)').css('width', '50px');
    $('.mbutton').eq(cnt-1).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');
    
    if (cnt == imageCount) cnt = 0;

    timeonoff = setInterval(move, 4000);

    if (onoff == false) {
        onoff = true;
        $(".ps").css('background','url(./images/stop.png)');
      }
}

$('.mbutton').click(m_click);

/* play/ps */
$('.ps').click(function(){ 
    if(onoff==true){
          clearInterval(timeonoff); 
            $(this).css('background','url(./images/play.png)');
        onoff=false;   
      }else{ 
          timeonoff= setInterval( move , 4000);
          $(this).css('background','url(./images/stop.png)');
          onoff=true; 
      }
 });

 /* arrow */

 $('.arrow').click(function(){

    clearInterval(timeonoff); 

    if($(this).is('.visual_right')){ // 오른쪽 버튼 클릭
        if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
        cnt++; //카운트 1씩증가
    }else if($(this).is('.visual_left')){  //왼쪽 버튼 클릭
        if(cnt==1)cnt=imageCount+1;   // 1->6  최초 화면에서 left를 눌렀을때 6으로 한 후 cnt--하면 5화면이 나옴
        if(cnt==0)cnt=imageCount;
        cnt--; //카운트 감소
    }


  $('.gallery li').hide(); 
  $('.gallery li').eq(cnt-1).fadeIn('slow'); 
                      
  $('.mbutton').css('background', 'rgba(255, 255, 255, .5)').css('width', '50px');
    $('.mbutton').eq(cnt-1).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');



  timeonoff= setInterval( move , 4000); 

  if (onoff == false) {
    onoff = true;
    $(".ps").css('background','url(./images/stop.png)');
  }
});
