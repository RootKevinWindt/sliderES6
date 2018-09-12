//start point
var slidePage = 1;
//timer set to 0
var timer = null;
//variable for de slides start with 1
showSlides(slidePage);
//function to go to next image
function plusSlide(image){
    //if on of the buttons are clicked set timer back to 0
    clearTimeout(timer);
    //slidepage + image means next image or previous image
    showSlides(slidePage += image);
}
//function to determine witch slide is on the screen
function currentSlide(image) {
    //if on of the buttons are clicked set timer back to 0
    clearTimeout(timer);
    //the slide that is on the screen is the current slide
    showSlides(slidePage = image);
}
function showSlides(image){
    //make empty variable
    var i;
    //connect images to variable
    var slides = document.getElementsByClassName("slideshow__slides");
    //if empty image is there go to next image
    if (image===undefined){image = ++slidePage}
    //if there is no more slide to go to, go back to slide 1
    if (image > slides.length) {slidePage = 1}
    //if there are more slides, go to next slide
    if (image < 1) {slidePage = slides.length}
    //let image slider go on for ever with a loop
    for (i = 0; i < slides.length; i++){
        //don't display all images
        slides[i].style.display = "none";
    }
    //if 1 image is being displayed block others
    slides[slidePage-1].style.display = "block";
    //the image changes every 5 seconds
    timer = setTimeout(showSlides, 5000);
}
//if key is pressed
document.onkeydown = function(e){
    //right key
    if (e.keyCode == 39) {
        plusSlide(1);
    }
    //left key
    else if (e.keyCode == 37) {
        plusSlide(-1);
    }
};
//the slideshow is playing
var playing = true;
//connection pause button
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.textContent = 'Play';
    playing = false;
}

function playSlideshow(){
    pauseButton.textContent = 'Pause';
    playing = true;
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};







