// Fade-in effect on load
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(20px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1.5s, transform 1.5s';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});
