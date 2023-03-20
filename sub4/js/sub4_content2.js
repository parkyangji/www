// 각각 열기
$('.chapter a').click(function(e){ 
    e.preventDefault(); 
    var chapterOpen = $(this).parent().siblings('dd');

    $(this).toggleClass('rotate');
    chapterOpen.slideToggle('linear');
});

// 모두 열기
var chapter = $('.chapter a')
var chapterAll = $('.chapter').siblings('dd');
var allText = $('.all');

$('.all').toggle(function(e){
    e.preventDefault();
    chapter.addClass('rotate');
    chapterAll.slideDown('linear');
    allText.text('모두 닫기');
}, function(e){
    e.preventDefault();
    chapter.removeClass('rotate');
    chapterAll.slideUp('linear');
    allText.text('모두 열기');
})