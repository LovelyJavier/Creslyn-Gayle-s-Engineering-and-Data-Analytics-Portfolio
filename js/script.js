// ==========================================
// Portfolio Website
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Navigation
    // ==========================================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    // ==========================================
    // Hero Animation
    // ==========================================

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        heroImage.animate(
            [
                { opacity: 0, transform: "scale(1.2)" },
                { opacity: 1, transform: "scale(1)" }
            ],
            {
                duration: 1200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    }

    // ==========================================
    // About Cards Animation
    // ==========================================

    const aboutCards = document.querySelectorAll(".strength-card");

    aboutCards.forEach((card, index) => {

        card.animate(
            [
                { opacity: 0, transform: "translateY(40px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 700,
                delay: index * 250,
                fill: "forwards"
            }
        );

    });

    // ==========================================
    // Skills Cards Animation
    // ==========================================

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {

        card.animate(
            [
                { opacity: 0, transform: "translateY(30px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 600,
                delay: index * 150,
                fill: "forwards"
            }
        );

    });

});
