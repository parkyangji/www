// JavaScript Document


// 닫기 버튼 클릭시
function hidebox() {
  let crossobj = document.getElementById("showimage");
  crossobj.style.visibility = "hidden";
}

// 쿠키설정
function setCookie(name, value, expiredays) {
  let today = new Date();
  today.setDate(today.getDate() + expiredays);
  let expires = "expires=" + today.toUTCString(); // 만료일 설정
  document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; " + expires;
}

// 쿠키 불러오기
function getCookie(name) {
  let cookieName = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie); // 현재 문서에 모든 쿠키를 디코딩
  let cookieArray = decodedCookie.split(";");  // ;를 기준으로 분리

  for (let i = 0; i < cookieArray.length; i++) { // cookieArray에서 cookieName를 찾는 반복문
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {   // 공백 제거
      cookie = cookie.substring(1);  
    }
    if (cookie.indexOf(cookieName) === 0) {  //cookiename을 찾을 때
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";  //cookiename이 없을 때
}

/* 구 버전
var ns4 = document.layers
var ie4 = document.all
var ns6 = document.getElementById && !document.all

var dragswitch = 0
var nsx
var nsy
var nstemp

// 닫기 버튼 클릭시
function hidebox() {
  crossobj = ns6 ? document.getElementById("showimage") : document.all.showimage
  if (ie4 || ns6)
    crossobj.style.visibility = "hidden"
  else if (ns4)
    document.showimage.visibility = "hide"
}

// 쿠키설정
function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

// 쿠키 불러오기
function getCookie(name) {
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
    var y = (x + nameOfCookie.length);
    if (document.cookie.substring(x, y) == nameOfCookie) {
      if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
        endOfCookie = document.cookie.length;
      return unescape(document.cookie.substring(y, endOfCookie));
    }
    x = document.cookie.indexOf(" ", x) + 1;
    if (x == 0)
      break;
  }
  return "";
}
*/
