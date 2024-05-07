$(document).ready(function() {
    // Variables
    let currentSlide = 0;
    const $slides = $(".slider figure");
    const totalSlides = $slides.length;
    // Function to show the current slide
    function showSlide() {
        $slides.hide();
        $slides.eq(currentSlide).show();
    }
    // Next button click event
    $("#next-button").on("click", function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide();
    });
    // Previous button click event
    $("#prev-button").on("click", function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide();
    });
    // Initial slide display
    showSlide();
     });