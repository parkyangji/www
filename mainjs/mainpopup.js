// JavaScript Document

var ns4 = document.layers
var ie4 = document.all
var ns6 = document.getElementById && !document.all

var dragswitch = 0
var nsx
var nsy
var nstemp


function hidebox() {
  crossobj = ns6 ? document.getElementById("showimage") : document.all.showimage
  if (ie4 || ns6)
    crossobj.style.visibility = "hidden"
  else if (ns4)
    document.showimage.visibility = "hide"
}

function setCookie(name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

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