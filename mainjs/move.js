/* JQUREY 버전

var timeonoff;
var imageCount = $('.gallery li').size()
var cnt = 1;
var onoff = true;

$('.mbutton').eq(0).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');
$('.gallery li').eq(0).fadeIn('slow');


function move() {
    cnt++;

    $('.gallery li').hide();
    $('.gallery li').eq(cnt-1).fadeIn('slow');

    $('.mbutton').css('background', 'rgba(255, 255, 255, .5)').css('width', '50px');
    $('.mbutton').eq(cnt-1).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');

    if(cnt==imageCount) {cnt=0};
}

function onoff_re() { // 정지 상태라면 다시 재생시킴
  if (onoff == false) {
    onoff = true;
    $(".ps").css('background','url(./images/stop.png)');
  }
}

// 반복 슬라이드

timeonoff = setInterval(move, 4000);

// 재생,정지

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


// 슬라이드 버튼

$('.mbutton').click(function(event){
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

  onoff_re();
});


 // 이동

 $('.arrow').click(function(){

    clearInterval(timeonoff); 

    if($(this).is('.visual_right')){ // 오른쪽 버튼 클릭
        if(cnt==imageCount)cnt=0;  
        cnt++; 
    }else if($(this).is('.visual_left')){  //왼쪽 버튼 클릭
        if(cnt==1)cnt=imageCount+1;
        if(cnt==0)cnt=imageCount;
        cnt--;
    }


  $('.gallery li').hide(); 
  $('.gallery li').eq(cnt-1).fadeIn('slow'); 
                      
  $('.mbutton').css('background', 'rgba(255, 255, 255, .5)').css('width', '50px');
  $('.mbutton').eq(cnt-1).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');



  timeonoff= setInterval( move , 4000); 

  onoff_re();
});

*/
