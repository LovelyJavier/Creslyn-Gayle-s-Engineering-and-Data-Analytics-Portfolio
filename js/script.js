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
                {
                    opacity: 0,
                    transform: "scale(1.2)"
                },
                {
                    opacity: 1,
                    transform: "scale(1)"
                }
            ],
            {
                duration: 1200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    }

    // ==========================================
    // Skills Animation
    // ==========================================

    document.querySelectorAll(".skill-card").forEach((card, index) => {

        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(30px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 700,
                delay: index * 150,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    });

    // ==========================================
    // About Animation
    // ==========================================

    document.querySelectorAll(".about-card").forEach((card, index) => {

        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 700,
                delay: index * 200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    });

    // ==========================================
    // Projects Animation
    // ==========================================

    document.querySelectorAll(".project-card").forEach((card, index) => {

        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 700,
                delay: index * 200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    });

    // ==========================================
    // Contact Animation
    // ==========================================

    document.querySelectorAll(".contact-card").forEach((card, index) => {

        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 700,
                delay: index * 200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    });

});
