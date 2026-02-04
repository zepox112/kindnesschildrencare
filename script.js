document.addEventListener("DOMContentLoaded", () => {
    const capsule = document.getElementById('liquid-capsule');
    // Tunachukua maneno yote yenye class 'nav-item'
    const items = document.querySelectorAll('.nav-item');

    items.forEach(item => {
        // Hapa tunaangalia kama neno halipo ndani ya footer (kuepuka copyright)
        if (!item.closest('footer')) {
            item.addEventListener('mouseenter', () => {
                const bounds = item.getBoundingClientRect();
                
                // Set vipimo kulingana na neno husika
                capsule.style.width = `${bounds.width + 30}px`;
                capsule.style.height = `${bounds.height + 20}px`;
                
                // Hamishia tone la maji hapo neno lilipo
                capsule.style.left = `${bounds.left - 15}px`;
                capsule.style.top = `${bounds.top - 10}px`;
                
                capsule.style.opacity = "1";
                item.classList.add('active'); // Inawasha Zoom & Glow
            });

            item.addEventListener('mouseleave', () => {
                capsule.style.opacity = "0";
                item.classList.remove('active');
            });
        }
    });
});