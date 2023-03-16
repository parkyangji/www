$('.tabs .tab').eq(0).addClass('current');

$('.tab').click(function(e){
    e.preventDefault();
    $('.tab').removeClass('current');
    $(this).addClass('current');

    var value=0;

    if($(this).hasClass('tab1')){  
    value= $('.cont').eq(0).offset().top-90; 
    }else if($(this).hasClass('tab2')){
    value= $('.cont').eq(1).offset().top-90; 
    }else if($(this).hasClass('tab3')){
    value= $('.cont').eq(2).offset().top-90; 
    }else if($(this).hasClass('tab4')){
    value= $('.cont').eq(3).offset().top-90; 
    }
    
$("html,body").stop().animate({"scrollTop":value},1000);
});
