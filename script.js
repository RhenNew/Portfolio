// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create bubble animations
function createBubble() {
    const section = document.querySelector('body');
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    section.appendChild(bubble);

    const size = Math.random() * 60 + 20 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.left = Math.random() * innerWidth + 'px';
    bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
    bubble.style.animationDelay = Math.random() * 2 + 's';

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

setInterval(createBubble, 500);
