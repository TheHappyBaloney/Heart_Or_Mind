document.addEventListener('DOMContentLoaded', () => {
    const heartGlow = document.getElementById('heart-glow');
    const brainGlow = document.getElementById('brain-glow');

    let currentGlow = null;
    let interval;

    const toggleGlow = () => {
        if (currentGlow === heartGlow) {
            currentGlow.classList.remove('active');
            brainGlow.classList.add('active');
            currentGlow = brainGlow;
        } else {
            if (currentGlow) currentGlow.classList.remove('active');
            heartGlow.classList.add('active');
            currentGlow = heartGlow;
        }
    };

    const startToggle = () => {
        interval = setInterval(toggleGlow, 500);
        setTimeout(() => {
            clearInterval(interval);
            if (Math.random() > 0.5) {
                brainGlow.classList.add('active');
                heartGlow.classList.remove('active');
            } else {
                heartGlow.classList.add('active');
                brainGlow.classList.remove('active');
            }
        }, Math.random() * 5000 + 3000); // Stop after 3-8 seconds
    };

    startToggle();
});
