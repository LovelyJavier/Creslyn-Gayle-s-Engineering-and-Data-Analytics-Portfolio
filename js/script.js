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
    // Project Carousel
    // ==========================================

    const projectsTrack = document.querySelector(".projects-track");

    const previousProjectButton =
        document.getElementById("previous-project");

    const nextProjectButton =
        document.getElementById("next-project");

    let currentProjectIndex = 0;
    let visibleProjectCards = [];


    function updateVisibleProjectCards() {

        visibleProjectCards = Array.from(
            document.querySelectorAll(".project-card")
        ).filter(card => card.style.display !== "none");

    }


    function updateProjectCarousel() {

        updateVisibleProjectCards();

        if (!projectsTrack || visibleProjectCards.length === 0) {

            return;

        }

        if (currentProjectIndex >= visibleProjectCards.length) {

            currentProjectIndex = visibleProjectCards.length - 1;

        }

        if (currentProjectIndex < 0) {

            currentProjectIndex = 0;

        }

        const currentCard = visibleProjectCards[currentProjectIndex];

        const allProjectCards = Array.from(
            document.querySelectorAll(".project-card")
        );

        const actualCardIndex =
            allProjectCards.indexOf(currentCard);

        projectsTrack.style.transform =
            `translateX(-${actualCardIndex * 100}%)`;

        if (previousProjectButton) {

            previousProjectButton.disabled =
                currentProjectIndex === 0;

        }

        if (nextProjectButton) {

            nextProjectButton.disabled =
                currentProjectIndex === visibleProjectCards.length - 1;

        }

    }


    if (previousProjectButton) {

        previousProjectButton.addEventListener("click", () => {

            if (currentProjectIndex > 0) {

                currentProjectIndex--;

                updateProjectCarousel();

            }

        });

    }


    if (nextProjectButton) {

        nextProjectButton.addEventListener("click", () => {

            updateVisibleProjectCards();

            if (
                currentProjectIndex <
                visibleProjectCards.length - 1
            ) {

                currentProjectIndex++;

                updateProjectCarousel();

            }

        });

    }


    // ==========================================
    // Project Filters
    // ==========================================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    if (filterButtons.length && projectCards.length) {

        let activeFilters = [];

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const filter = button.dataset.filter;

                if (filter === "all") {

                    activeFilters = [];

                    filterButtons.forEach(btn => {

                        btn.classList.remove("active");

                    });

                    button.classList.add("active");

                    projectCards.forEach(card => {

                        card.style.display = "grid";

                    });

                    currentProjectIndex = 0;
                    updateProjectCarousel();

                    return;

                }

                const allButton =
                    document.querySelector(
                        '[data-filter="all"]'
                    );

                if (allButton) {

                    allButton.classList.remove("active");

                }

                button.classList.toggle("active");

                if (activeFilters.includes(filter)) {

                    activeFilters =
                        activeFilters.filter(
                            activeFilter =>
                                activeFilter !== filter
                        );

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

                    currentProjectIndex = 0;
                    updateProjectCarousel();

                    return;

                }

                projectCards.forEach(card => {

                    const tools = card.dataset.tools
                        .toLowerCase()
                        .split(",")
                        .map(tool => tool.trim());

                    const matches =
                        activeFilters.every(
                            activeFilter =>
                                tools.includes(activeFilter)
                        );

                    card.style.display =
                        matches ? "grid" : "none";

                });

                currentProjectIndex = 0;
                updateProjectCarousel();

            });

        });

    }


    // ==========================================
    // Initial Carousel Position
    // ==========================================

    updateProjectCarousel();

});
