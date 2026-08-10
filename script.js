/* ==========================
   ELEMENTS
========================== */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const puppy = document.getElementById("puppy");
const startBtn = document.getElementById("startBtn");

const music = document.getElementById("bgMusic");

const hearts = document.querySelector(".hearts");


/* ==========================
   SHOW BUTTON
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        startBtn.style.display = "inline-block";
        startBtn.style.animation = "fadeButton 0.6s ease";

    }, 3000);

});


/* ==========================
   BUTTON CLICK
========================== */

startBtn.addEventListener("click", () => {

    if (music) {
        music.play().catch(() => {});
    }

    intro.style.display = "none";
    mainContent.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(() => {
        scrolling = true;
        autoScroll();
    }, 1000);

});


/* ==========================
   FLOATING HEARTS
   MOBILE OPTIMIZED
========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5500);
}

setInterval(createHeart, 700);


/* ==========================
   PHOTO ANIMATION
========================== */

const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1)";

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});


photos.forEach(photo => {

    photo.style.opacity = "0";
    photo.style.transform = "scale(0.85)";
    photo.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(photo);

});


/* ==========================
   BUTTON ANIMATION
========================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeButton {

    from {
        opacity: 0;
        transform: scale(0.5);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

}

`;

document.head.appendChild(style);


/* ==========================
   SPARKLES
   MOBILE OPTIMIZED
========================== */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (10 + Math.random() * 14) + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.transition = "0.8s";
    sparkle.style.zIndex = "999";

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {

        sparkle.style.opacity = "0";
        sparkle.style.transform = "scale(1.5)";

    });

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

setInterval(createSparkle, 900);


/* ==========================
   BALLOONS
========================== */

function balloon() {

    const b = document.createElement("div");

    b.innerHTML = "💕";

    b.style.position = "fixed";
    b.style.left = Math.random() * 100 + "vw";
    b.style.bottom = "-60px";
    b.style.fontSize = (25 + Math.random() * 15) + "px";
    b.style.transition = "7s linear";
    b.style.pointerEvents = "none";
    b.style.zIndex = "998";

    document.body.appendChild(b);

    requestAnimationFrame(() => {
        b.style.bottom = "110vh";
    });

    setTimeout(() => {
        b.remove();
    }, 8000);
}

setInterval(balloon, 4000);


/* ==========================
   FIREWORKS
========================== */

function firework() {

    const f = document.createElement("div");

    const icons = ["✨", "💖"];

    f.innerHTML = icons[
        Math.floor(Math.random() * icons.length)
    ];

    f.style.position = "fixed";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 60 + "vh";
    f.style.fontSize = (25 + Math.random() * 15) + "px";
    f.style.pointerEvents = "none";
    f.style.transition = "0.8s";
    f.style.zIndex = "997";

    document.body.appendChild(f);

    requestAnimationFrame(() => {

        f.style.transform = "scale(2)";
        f.style.opacity = "0";

    });

    setTimeout(() => {
        f.remove();
    }, 1000);
}

setInterval(firework, 3000);


/* ==========================
   AUTO SCROLL
   FASTER ON MOBILE
========================== */
/* ==========================
   AUTO SCROLL
   SMOOTH + MOBILE OPTIMIZED
========================== */

let scrolling = false;
let lastTime = 0;

const isMobile = window.matchMedia("(max-width: 768px)").matches;

// Speed in pixels per second
const scrollSpeed = isMobile ? 230 : 160;

function autoScroll(time) {

    if (!scrolling) return;

    if (!lastTime) {
        lastTime = time;
    }

    let delta = time - lastTime;

    // Prevent sudden jumps
    if (delta > 50) {
        delta = 50;
    }

    lastTime = time;

    const currentPosition = window.scrollY;

    const nextPosition =
        currentPosition + (scrollSpeed * delta / 1000);

    window.scrollTo(0, nextPosition);

    if (
        window.innerHeight + window.scrollY <
        document.documentElement.scrollHeight - 2
    ) {

        requestAnimationFrame(autoScroll);

    } else {

        scrolling = false;
        lastTime = 0;
    }
}


/* ==========================
   START AUTO SCROLL
========================== */

startBtn.addEventListener("click", () => {

    setTimeout(() => {

        // Disable CSS smooth scrolling
        document.documentElement.style.scrollBehavior = "auto";

        scrolling = true;
        lastTime = 0;

        requestAnimationFrame(autoScroll);

    }, 1500);

});

/* ==========================
   STOP AUTO SCROLL
   WHEN USER TOUCHES SCREEN
========================== */

let touchStartY = 0;

window.addEventListener("touchstart", (event) => {

    touchStartY = event.touches[0].clientY;

}, { passive: true });


window.addEventListener("touchmove", (event) => {

    const currentY = event.touches[0].clientY;

    if (Math.abs(currentY - touchStartY) > 10) {
        scrolling = false;
    }

}, { passive: true });


/* ==========================
   FINAL MESSAGE
========================== */

setTimeout(() => {

    console.log("Happy Birthday Madhu ❤️");

}, 10000);


/* ==========================
   END
========================== */