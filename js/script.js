
/* =================================
   WIFI BLISS - WELCOME PAGE
================================= */

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const particles = document.querySelector(".particles");
    const wifiOrb = document.querySelector(".wifi-orb");

    // Add gentle movement to the background lights.
    if (hero && particles) {
        hero.addEventListener("pointermove", (event) => {
            const bounds = hero.getBoundingClientRect();

            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;

            particles.style.transform =
                `translate(${(x - 0.5) * 12}px, ${(y - 0.5) * 12}px)`;
        });
    }

    // Give the Wi-Fi symbol a gentle interactive glow.
    if (wifiOrb) {
        wifiOrb.addEventListener("mouseenter", () => {
            wifiOrb.style.filter = "brightness(1.2)";
        });

        wifiOrb.addEventListener("mouseleave", () => {
            wifiOrb.style.filter = "brightness(1)";
        });
    }

    // Confirm that the welcome page JavaScript has loaded.
    console.log("WiFi Bliss welcome page is ready!");
});
