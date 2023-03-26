const mbutton = document.querySelectorAll('.mbutton');
const ps = document.querySelector('.ps');
const arrow = document.querySelectorAll('.arrow');
const gallery_list = document.querySelector('.gallery').children[0].children;

let timeonoff;
let imageCount = gallery_list.length;
let cnt = 1;
let onoff = true;

mbutton[0].style.background = 'rgba(255, 255, 255, 1)';
mbutton[0].style.width = '130px';


function current_img() {
  for (let i=0; i<imageCount; i++) {
    gallery_list[i].style.display = 'none'
  }

  gallery_list[cnt-1].style.display = 'block'
}

function current_txt() {
  for (let j=0; j<imageCount; j++) {
    mbutton[j].style.background = 'rgba(255, 255, 255, .5)';
    mbutton[j].style.width = '50px';
  }

  mbutton[cnt-1].style.background = 'rgba(255, 255, 255, 1)';
  mbutton[cnt-1].style.width = '130px';
}

function onoff_re() {
  if (onoff == false) {
    onoff = true;
    ps.style.background = 'url(./images/stop.png)';
  }
}

// 반복 슬라이드

function move() {
  cnt++;

  current_img();
  current_txt();

  if (cnt == imageCount) cnt = 0;
}

timeonoff = setInterval(move, 4000);

/* JQUREY 버전

  var timeonoff;
  var imageCount = $('.gallery li').size()
  var cnt = 1;
  var onoff = true;

  $('.mbutton').eq(0).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');
  $('.gallery li').eq(0).fadeIn('slow');


  function onoff_re() { // 정지 상태라면 다시 재생시킴
    if (onoff == false) {
      onoff = true;
      $(".ps").css('background','url(./images/stop.png)');
    }
  }

  // 반복 슬라이드

  function move() {
      cnt++;

      $('.gallery li').hide();
      $('.gallery li').eq(cnt-1).fadeIn('slow');

      $('.mbutton').css('background', 'rgba(255, 255, 255, .5)').css('width', '50px');
      $('.mbutton').eq(cnt-1).css('background', 'rgba(255, 255, 255, 1)').css('width', '130px');

      if(cnt==imageCount) {cnt=0};
  }

  timeonoff = setInterval(move, 4000);

*/

// 재생, 정지

ps.addEventListener('click', function(e) {
  e.preventDefault();

  if(onoff == true) {
    clearInterval(timeonoff);
    this.style.background = 'url(./images/play.png)';
    onoff = false;
  } else {
    timeonoff = setInterval(move, 4000);
    this.style.background = 'url(./images/stop.png)';
    onoff = true; 
  }
})
 
/* JQUREY 버전

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

*/


// 슬라이드 버튼

mbutton.forEach(function(a, i) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    clearInterval(timeonoff);

    switch (i) {
      case 0 : cnt = 1;
        break;
      case 1 : cnt = 2;
        break;
      case 2 : cnt = 3;
        break;
    }
  
    current_img();
    current_txt();

    if (cnt == imageCount) cnt = 0;

    timeonoff = setInterval(move, 4000);

    onoff_re();
    
  })
})

/* JQUREY 버전

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

  */


// 이동

arrow.forEach(function(a, i) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    clearInterval(timeonoff);

    if (arrow[i].classList.contains('visual_right')) {
      if(cnt==imageCount)cnt=0;
      cnt++; 
    } else if (arrow[i].classList.contains('visual_left')) {
      if(cnt==1)cnt=imageCount+1;
      if(cnt==0)cnt=imageCount;
      cnt--;
    }

    current_img();
    current_txt();

    if (cnt == imageCount) cnt = 0;

    timeonoff = setInterval(move, 4000);

    onoff_re();
  })
})



/* JQUREY 버전

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
