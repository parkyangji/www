const tabArr = document.querySelectorAll('.tab');
const contArr = document.querySelectorAll('.cont');

tabArr[0].classList.add('current');
contArr[0].style.display = "block";

tabArr.forEach(function(a, i ) {
    a.addEventListener('click', function(e) {
        e.preventDefault();

        for (let j=0; j<tabArr.length; j++) {
            contArr[j].style.display = "none";
            tabArr[j].classList.remove('current');
        }

        contArr[i].style.display = "block";
        tabArr[i].classList.add('current');
    })
})


/* JQUERY 버전

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

*/


    