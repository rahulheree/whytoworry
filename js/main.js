```javascript
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('bg-black/50', window.scrollY > 50);
            header.classList.toggle('backdrop-blur-lg', window.scrollY > 50);
            header.classList.toggle('shadow-lg', window.scrollY > 50);
        }, { passive: true });
    }
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => observer.observe(el));
    }
});
```