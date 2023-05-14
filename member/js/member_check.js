document.querySelector('.check_agree').addEventListener('click', checkAgree);

function checkAgree(e) {
  e.preventDefault();

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkboxLength = checkboxes.length;
  const checkedLength = document.querySelectorAll('input[type="checkbox"]:checked').length; // Checked checkboxes

  if (checkboxLength !== checkedLength) {
    alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
    e.preventDefault();
  } else {
    location.href = "./join.html";
  }
}

document.querySelector('.allcheck').addEventListener('click', toggleCheck);

function toggleCheck(e) {
  e.preventDefault();

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let areAllChecked = Array.from(checkboxes).every(function (checkbox) { //배열로 변환하여 every 모든 요소가 참인지 거짓인지
    return checkbox.checked;
  });

  checkboxes.forEach(function (checkbox) {
    checkbox.checked = !areAllChecked;  //모두 반대로
  });
}
  
/* jquery 버전


$('.check_agree').on('click', check_agree);

function check_agree(e) {
  e.preventDefault();

  var checkboxLength = $('input[type="checkbox"]').length; // 체크박스의 총개수
  var checkedLength = $('input[type="checkbox"]:checked').length; //체크가 되어있는 체그박스 개

  if (checkboxLength != checkedLength) {
    alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
    e.preventDefault();
  } else { //모드 체크 되었다면
    location.href = "./join.html"; //회원가입 폼 입력 페이지로 이동
  }
}


$('.allcheck').toggle(function (e) {
  e.preventDefault();
  $('input[type="checkbox"]').attr('checked', true);
}, function (e) {
  e.preventDefault();
  $('input[type="checkbox"]').attr('checked', false);
});

*/

















