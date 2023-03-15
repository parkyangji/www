// esg경영
        
$('.esg_btn a').click(function(e) {
    e.preventDefault();

    if($(this).hasClass('btnPrev')) {
        $('.list_esg li').last().prependTo('.list_esg');
    } else if ($(this).hasClass('btnNext')) {
        $('.list_esg li').first().appendTo('.list_esg');
    }
})




