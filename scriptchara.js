const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    const offset = index * -100;
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);
