document.addEventListener('mousemove', parallax);

function parallax(e) {
    const layers = document.querySelectorAll('.shape');
    const speed = 2; // Ajusta este valor para controlar el movimiento

    layers.forEach(layer => {
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
