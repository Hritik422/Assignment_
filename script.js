// Function to open the contact form
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Function to close the contact form
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
function currentbox(n){
    let first=document.getElementById("first");
    let second=document.getElementById("second");
    let third=document.getElementById("third");
    if(n==1){
        first.style.background="#FF3147";
        first.style.color="white";
        second.style.background="#F6F6F6";
        second.style.color="black";
        third.style.background="#F6F6F6";
        third.style.color="black";
        document.getElementById("pro-img").src="222.png";
    }
    else if(n==2){
        first.style.background="#F6F6F6";
        first.style.color="black";
        second.style.background="#FF3147";
        second.style.color="white";
        third.style.background="#F6F6F6";
        third.style.color="black";
        document.getElementById("pro-img").src="image.png";
    }
    else{
        first.style.background="#F6F6F6";
        first.style.color="black";
        second.style.background="#F6F6F6";
        second.style.color="black";
        third.style.background="#FF3147";
        third.style.color="white";
        document.getElementById("pro-img").src="333.png";
    } 
    
}
// Slider functionality
let slideIndex = 0;
//showSlides();
//showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 3 seconds
}

function currentSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider-wrapper");
    const images = document.querySelectorAll(".slider-wrapper div");
    const imageCount = images.length;
    const slideWidth = 100; // Adjust this according to your image width
    let dots = document.getElementsByClassName("dot");
    let currentIndex = 0;
  
    function moveSlider() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function rotateImages() {
      currentIndex++;
      if(currentIndex<=1)currentSlide(1);
      if(currentIndex===3){
          currentSlide(2);
      }
      if(currentIndex===6)currentSlide(3);
      if (currentIndex === imageCount-5) {
        currentIndex = 0;
      }
      moveSlider();
    }
  
    setInterval(rotateImages, 2000);
  });