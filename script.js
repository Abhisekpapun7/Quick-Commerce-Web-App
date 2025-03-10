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

