const ball = document.querySelector(".cursor-ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let scale = 1;

if (ball) {
    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animateCursor() {
        ballX += (mouseX - ballX) * 0.15;
        ballY += (mouseY - ballY) * 0.15;

        ball.style.transform = `translate(${ballX}px, ${ballY}px) translate(-50%, -50%) scale(${scale})`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const hoverTargets = document.querySelectorAll("a, button, .scroller-word");

    hoverTargets.forEach((target) => {
        target.addEventListener("mouseenter", function () {
            scale = 2;
        });

        target.addEventListener("mouseleave", function () {
            scale = 1;
        });
    });
}