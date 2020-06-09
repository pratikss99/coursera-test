var slideIndex = 1;
showSlides(slideIndex);
function plusSlides1(n) {
  showSlides(slideIndex += n);
}
var slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n2) {
  showSlides2(slideIndex2 += n2);
}
var slideIndex3 = 1;
showSlides3(slideIndex3);
function plusSlides3(n3) {
  showSlides3(slideIndex3 += n3);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

 function showSlides2(n2) { 
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n2 > slides2.length) {slideIndex2 = 1}
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
 }
 function showSlides3(n3) { 
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n3 > slides3.length) {slideIndex3 = 1}
  if (n3 < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
}




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i2;
  var x2 = document.getElementsByClassName("mySlides2");
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x2.length) {myIndex2 = 1}    
  x2[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 4000); // Change image every 2 seconds
}

var myIndex3 = 0;
carousel3();

function carousel3() {
  var i3;
  var x3 = document.getElementsByClassName("mySlides3");
  for (i3 = 0; i3 < x3.length; i3++) {
    x3[i3].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x3.length) {myIndex3 = 1}    
  x3[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 4000); // Change image every 2 seconds
}
