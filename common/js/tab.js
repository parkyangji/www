$('.cont').eq(0).show();
$('.tabs .tab').eq(0).addClass('current');
      

$('.tabs .tab').click(function(e){
        e.preventDefault();   
        
        var ind = $(this).index('.tab');

        $(".cont").hide(); 
        $(".cont").eq(ind).show();
        $('.tabs .tab').removeClass('current');
        $(this).addClass('current');

    });


    