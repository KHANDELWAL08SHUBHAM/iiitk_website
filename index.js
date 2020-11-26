document.getElementById("btn1").onclick = function() {
  location.href = "https://www.nirfindia.org/Home";
};

document.getElementById("btn2").onclick = function() {
  location.href = "http://www.mnit.ac.in";
};

document.getElementById("btn3").onclick = function() {
  location.href = "https://www.aicte-india.org/";
};

document.getElementById("btn4").onclick = function() {
  location.href = "https://nptel.ac.in/";
};

document.getElementById("btn5").onclick = function() {
  location.href = "https://swayam.gov.in/";
};

document.getElementById("btn6").onclick = function() {
  location.href = "https://mhrd.gov.in/";
};


var year = new Date().getFullYear();
document.getElementById("copyright").innerHTML += year;



 var marquee = document.getElementById ("marquee");

 
 marquee.onmouseover = function(){
    marquee.stop();
 }
 marquee.onmouseout = function(){
    marquee.start();
 }
