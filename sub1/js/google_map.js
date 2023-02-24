// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.496608,127.153152);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"우리집"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "서울시 송파구 마천로51길 32-22"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

