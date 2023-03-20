var article = $('.chapter');  //모든 질문 답변 리스트
	
	$('.chapter a').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parent().siblings('dd'); //클릭한 해당 list 
        myArticle.slideToggle();
  });