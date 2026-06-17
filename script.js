document.addEventListener('mousemove', function(e) {
    const badges = document.querySelectorAll('.floating-badge');
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    badges.forEach(badge => {
        const speed = badge.getAttribute('data-speed');
        
        const x = (mouseX - centerX) * speed * 0.01;
        const y = (mouseY - centerY) * speed * 0.01;
        
        badge.style.transform = `translate(${x}px, ${y}px)`;
    });
});