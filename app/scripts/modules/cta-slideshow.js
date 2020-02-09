
var slideIndex = 1;
var myTimer;
var slideshowContainer;

// Set duration and transition times as variables
var duration = 7000;
var transition = 800;

// Run Slideshow
window.addEventListener("load", function() {

    showSlides(slideIndex);

    myTimer = setInterval(function() {
        plusSlides(1)
    }, duration);

    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    slideshowContainer.addEventListener('mouseenter', pause);
    slideshowContainer.addEventListener('mouseleave', resume);
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){

    clearInterval(myTimer);

    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1); 
    }

    if (n === -1){
        myTimer = setInterval(function() {
            plusSlides(n + 2)
        }, duration);
    } else {
        myTimer = setInterval(function() {
            plusSlides(n + 1)
        }, duration);
    }

}

//Controls the current slide and resets interval if needed
function currentSlide(n) {

    clearInterval(myTimer);

    myTimer = setInterval(function() {
        plusSlides(n + 1)
    }, duration);

    showSlides(slideIndex = n);

}

function showSlides(n){

    var i;
    var slides = document.getElementsByClassName("slideshow-slide");
    
    // Set previousSlide to be able to change z-index for css animation
    var previousSlide = document.querySelector('.slideshow-slidewrapper > .active');

    if (n > slides.length) { 
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        
        // Use z-index instead of display:none to allow for multiple transition types
        slides[i].style.zIndex = "1";
        
        // Remove .active from the current slide
        slides[i].className = slides[i].className.replace(" active", "");
    }

    // Sets current Slide on top of others
    slides[slideIndex-1].style.zIndex = "3";
    
    // adds .active to current slide to trigger animationt transition
    slides[slideIndex-1].className += " active";
    
    // sets the previous slide to be directly underneath current slide so transition is smooth
    if (previousSlide != null) {
        previousSlide.style.zIndex = '2';
    }
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, duration);
}