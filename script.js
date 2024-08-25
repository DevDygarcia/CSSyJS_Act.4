document.addEventListener('DOMContentLoaded', () => {
    // Efecto de desvanecimiento
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        el.classList.add('visible');
    });

    // Efecto de deslizamiento hacia arriba
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => {
        el.classList.add('visible');
    });

    // Efecto de zoom-in
    const zoomInElements = document.querySelectorAll('.zoom-in');
    zoomInElements.forEach(el => {
        el.classList.add('visible');
    });

    // Efecto de flip-in
    const flipInElements = document.querySelectorAll('.flip-in');
    flipInElements.forEach(el => {
        el.classList.add('visible');
    });
});
