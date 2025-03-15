const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', function () {
        // Change scroll bar color
        let newColor = this.getAttribute('data-color');
        document.querySelector('.category-bar').style.backgroundColor = newColor;

        // Remove active class from all
        categories.forEach(cat => cat.classList.remove('active'));

        // Add active class to clicked category
        this.classList.add('active');
    });
});

// logic for slideshow bar

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none"); 
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } 
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Auto change every 3 seconds
}
function changeSlide(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    slides.forEach(slide => slide.style.display = "none"); 
    slides[slideIndex].style.display = "block";
}

// Initialize slideshow
showSlides();
