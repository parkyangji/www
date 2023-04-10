$(document).ready(function(){
        
    
    $('.check_agree').on('click',check_agree);
    
    function check_agree(e){
        e.preventDefault();

        var checkboxLength=$('input[type="checkbox"]').length;// 체크박스의 총개수
        var checkedLength=$('input[type="checkbox"]:checked').length;   //체크가 되어있는 체그박스 개
        
        if(checkboxLength != checkedLength){
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
            e.preventDefault();
        }else{  //모드 체크 되었다면
            location.href="./join.html";   //회원가입 폼 입력 페이지로 이동
        }
    }


    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);
    },function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false);
    });    

    
   });

















