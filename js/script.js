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
// ==========================================
// Project Filters
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

let activeFilters = [];

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        // Show all projects
        if (filter === "all") {

            activeFilters = [];

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            projectCards.forEach(card => {

                card.style.display = "grid";

            });

            return;

        }

        // Remove "All" selection
        document
            .querySelector('[data-filter="all"]')
            .classList.remove("active");

        // Toggle current button
        button.classList.toggle("active");

        if (activeFilters.includes(filter)) {

            activeFilters = activeFilters.filter(f => f !== filter);

        } else {

            activeFilters.push(filter);

        }

        // If no filters selected, show all
        if (activeFilters.length === 0) {

            document
                .querySelector('[data-filter="all"]')
                .classList.add("active");

            projectCards.forEach(card => {

                card.style.display = "grid";

            });

            return;

        }

        // Filter projects
        projectCards.forEach(card => {

            const tools = card.dataset.tools
                .toLowerCase()
                .split(",");

            const matches = activeFilters.every(filter =>
                tools.includes(filter)
            );

            card.style.display = matches ? "grid" : "none";

        });

    });

});
// ==========================================
    // Dark Mode
    // ==========================================

    const themeButton = document.getElementById("theme-toggle");

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");

        themeButton.textContent = "☀️";

    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            themeButton.textContent = "☀️";

            localStorage.setItem("theme","dark");

        }else{

            themeButton.textContent = "🌙";

            localStorage.setItem("theme","light");

        }

    });

});

