const chapterAll = document.querySelectorAll('.chapter');
const titleArr = Object.values(chapterAll).map(function (el) {
  return el.previousElementSibling
})
const all_btn = document.querySelector('.all');

titleArr.forEach((a, i) => {
  a.addEventListener('click', (e) => {
    const target = e.target;
    e.preventDefault();

    chapterAll[i].style.display = (chapterAll[i].style.display == 'block') ? 'none' : 'block';

    if (target.className == 'rotate') {
      target.classList.remove('rotate');
    } else {
      target.classList.add('rotate');
    }

  })
})

let all = false;

all_btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (all) {
    for (let i = 0; i < chapterAll.length; i++) {
      chapterAll[i].style.display = 'none';
      titleArr[i].classList.remove('rotate');
    }
    all_btn.innerHTML = '모두 열기';
    all = false;
  } else {
    for (let i = 0; i < chapterAll.length; i++) {
      chapterAll[i].style.display = 'block';
      titleArr[i].classList.add('rotate');
    }
    all_btn.innerHTML = '모두 닫기';
    all = true;
  }
})



/* JQUERY 버전

// 각각 열기
$('.ethics_conduct li a').click(function(e){ 
    e.preventDefault(); 
    var chapter = $(this).siblings();

    $(this).toggleClass('rotate');
    chapter.slideToggle('linear');
});

// 모두 열기
$('.all').toggle(function(e){
    e.preventDefault();
    $('.ethics_conduct li a').addClass('rotate');
    $('.chapter').slideDown('linear');
    $(this).text('모두 닫기');
}, function(e){
    e.preventDefault();
    $('.ethics_conduct li a').removeClass('rotate');
    $('.chapter').slideUp('linear');
    $(this).text('모두 열기');
})

*/
