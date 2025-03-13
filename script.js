document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.category');
    const categoryBar = document.querySelector('.category-bar');
    const cafeSection = document.querySelector('.cafe');
    const cafeBtn = document.getElementById("cafe-btn");

    categories.forEach(category => {
        category.addEventListener('click', function () {
            let newColor = this.getAttribute('data-color') || '#FFF2F2';
            categoryBar.style.backgroundColor = newColor;

            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Load Cafe Section when Cafe Category is Clicked
    cafeBtn.addEventListener("click", function () {
        fetch("cafe_section.html")
            .then(response => response.text())
            .then(data => {
                cafeSection.innerHTML = data; // Insert HTML content
                loadCafeScript(); // Initialize cafe-specific JS
            })
            .catch(error => console.error("Error loading cafe section:", error));
    });
});

// Function to Load cafe_script.js dynamically
function loadCafeScript() {
    const script = document.createElement("script");
    script.src = "cafe_script.js";
    document.body.appendChild(script);
}
