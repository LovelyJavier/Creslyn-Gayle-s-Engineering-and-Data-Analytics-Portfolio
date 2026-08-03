// ==========================================
// Portfolio Website
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Navigation
    // ==========================================

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            header.classList.toggle("scrolled", window.scrollY > 50);

        });

    }

    // ==========================================
    // Reusable Animation Function
    // ==========================================

    function animateCards(selector, y = 40, delay = 200) {

        document.querySelectorAll(selector).forEach((card, index) => {

            card.animate(
                [
                    {
                        opacity: 0,
                        transform: `translateY(${y}px)`
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 700,
                    delay: index * delay,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

        });

    }

    // ==========================================
    // Hero
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
    // Section Animations
    // ==========================================

    animateCards(".skill-card", 30, 150);
    animateCards(".about-card");
    animateCards(".project-card");
    animateCards(".contact-card");

    // ==========================================
    // Project Filters
    // ==========================================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length && projectCards.length) {

        let activeFilters = [];

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter = button.dataset.filter;

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

                const allButton = document.querySelector('[data-filter="all"]');

                if (allButton) {

                    allButton.classList.remove("active");

                }

                button.classList.toggle("active");

                if (activeFilters.includes(filter)) {

                    activeFilters = activeFilters.filter(f => f !== filter);

                } else {

                    activeFilters.push(filter);

                }

                if (activeFilters.length === 0) {

                    if (allButton) {

                        allButton.classList.add("active");

                    }

                    projectCards.forEach(card => {

                        card.style.display = "grid";

                    });

                    return;

                }

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

    }

});
