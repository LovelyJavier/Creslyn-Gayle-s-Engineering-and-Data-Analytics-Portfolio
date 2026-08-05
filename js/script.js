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

            header.classList.toggle(
                "scrolled",
                window.scrollY > 50
            );

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
    // Section Animations
    // ==========================================

    animateCards(".skill-card", 30, 150);
    animateCards(".about-card");
    animateCards(".contact-card");

    /*
    Do not animate .project-card here because the animation uses
    transform and may interfere with carousel positioning.
    */


    // ==========================================
    // Project Carousel
    // ==========================================

    const projectsTrack =
        document.querySelector(".projects-track");

    const allProjectCards =
        Array.from(document.querySelectorAll(".project-card"));

    const previousProjectButton =
        document.getElementById("previous-project");

    const nextProjectButton =
        document.getElementById("next-project");

    let currentProjectIndex = 0;


    function getVisibleProjectCards() {

        return allProjectCards.filter(card => {

            return window.getComputedStyle(card).display !== "none";

        });

    }


    function updateProjectCarousel() {

        if (!projectsTrack) {
            return;
        }

        const visibleCards = getVisibleProjectCards();

        if (visibleCards.length === 0) {

            projectsTrack.style.transform = "translateX(0)";

            if (previousProjectButton) {
                previousProjectButton.disabled = true;
            }

            if (nextProjectButton) {
                nextProjectButton.disabled = true;
            }

            return;

        }

        if (currentProjectIndex >= visibleCards.length) {

            currentProjectIndex = visibleCards.length - 1;

        }

        if (currentProjectIndex < 0) {

            currentProjectIndex = 0;

        }

        const currentCard = visibleCards[currentProjectIndex];

        /*
        offsetLeft finds the card's actual position inside the track.
        This remains reliable even when projects are filtered.
        */

        projectsTrack.style.transform =
            `translateX(-${currentCard.offsetLeft}px)`;

        if (previousProjectButton) {

            previousProjectButton.disabled =
                currentProjectIndex === 0;

        }

        if (nextProjectButton) {

            nextProjectButton.disabled =
                currentProjectIndex === visibleCards.length - 1;

        }

    }


    // Previous button

    if (previousProjectButton) {

        previousProjectButton.addEventListener("click", () => {

            if (currentProjectIndex > 0) {

                currentProjectIndex--;

                updateProjectCarousel();

            }

        });

    }


    // Next button

    if (nextProjectButton) {

        nextProjectButton.addEventListener("click", () => {

            const visibleCards = getVisibleProjectCards();

            if (currentProjectIndex < visibleCards.length - 1) {

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

    let activeFilters = [];

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.filter.toLowerCase();

            const allButton =
                document.querySelector('[data-filter="all"]');


            // All projects

            if (selectedFilter === "all") {

                activeFilters = [];

                filterButtons.forEach(filterButton => {

                    filterButton.classList.remove("active");

                });

                button.classList.add("active");

                allProjectCards.forEach(card => {

                    card.style.display = "grid";

                });

                currentProjectIndex = 0;

                requestAnimationFrame(updateProjectCarousel);

                return;

            }


            // Remove active state from All

            if (allButton) {

                allButton.classList.remove("active");

            }


            // Toggle selected filter

            button.classList.toggle("active");

            if (activeFilters.includes(selectedFilter)) {

                activeFilters = activeFilters.filter(filter => {

                    return filter !== selectedFilter;

                });

            } else {

                activeFilters.push(selectedFilter);

            }


            // Return to All when no filters remain

            if (activeFilters.length === 0) {

                if (allButton) {

                    allButton.classList.add("active");

                }

                allProjectCards.forEach(card => {

                    card.style.display = "grid";

                });

                currentProjectIndex = 0;

                requestAnimationFrame(updateProjectCarousel);

                return;

            }


            // Show matching projects

            allProjectCards.forEach(card => {

                const projectTools = card.dataset.tools
                    .toLowerCase()
                    .split(",")
                    .map(tool => tool.trim());

                const projectMatches =
                    activeFilters.every(filter => {

                        return projectTools.includes(filter);

                    });

                card.style.display =
                    projectMatches ? "grid" : "none";

            });

            currentProjectIndex = 0;

            requestAnimationFrame(updateProjectCarousel);

        });

    });


    // ==========================================
    // Window Resize
    // ==========================================

    window.addEventListener("resize", () => {

        updateProjectCarousel();

    });


    // ==========================================
    // Initial Carousel Position
    // ==========================================

    requestAnimationFrame(updateProjectCarousel);

});
