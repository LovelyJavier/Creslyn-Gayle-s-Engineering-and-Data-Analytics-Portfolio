document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".projects-track");
    const cards = Array.from(
        document.querySelectorAll(".project-card")
    );

    const previousButton =
        document.getElementById("previous-project");

    const nextButton =
        document.getElementById("next-project");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    let visibleCards = [...cards];
    let currentIndex = 0;


    // ==========================================
    // UPDATE CAROUSEL
    // ==========================================

    function updateCarousel() {

        if (visibleCards.length === 0) {

            track.style.transform = "translateX(0)";

            previousButton.disabled = true;
            nextButton.disabled = true;

            return;

        }

        if (currentIndex < 0) {
            currentIndex = 0;
        }

        if (currentIndex >= visibleCards.length) {
            currentIndex = visibleCards.length - 1;
        }

        /*
        Hidden projects no longer take up space.
        Therefore, visible projects can be moved
        using their visible index.
        */

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        previousButton.disabled =
            currentIndex === 0;

        nextButton.disabled =
            currentIndex === visibleCards.length - 1;

    }


    // ==========================================
    // NEXT PROJECT
    // ==========================================

    nextButton.addEventListener("click", function () {

        if (currentIndex < visibleCards.length - 1) {

            currentIndex++;

            updateCarousel();

        }

    });


    // ==========================================
    // PREVIOUS PROJECT
    // ==========================================

    previousButton.addEventListener("click", function () {

        if (currentIndex > 0) {

            currentIndex--;

            updateCarousel();

        }

    });


    // ==========================================
    // PROJECT FILTERS
    // ==========================================

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.dataset.filter.toLowerCase();

            // Update active filter button

            filterButtons.forEach(filterButton => {

                filterButton.classList.remove("active");

            });

            button.classList.add("active");


            // Show or hide projects

            cards.forEach(card => {

                const projectTools = card.dataset.tools
                    .toLowerCase()
                    .split(",")
                    .map(tool => tool.trim());

                const matches =
                    selectedFilter === "all" ||
                    projectTools.includes(selectedFilter);

                card.style.display =
                    matches ? "grid" : "none";

            });


            // Rebuild list of visible projects

            visibleCards = cards.filter(card => {

                return card.style.display !== "none";

            });


            // Always display the first matching project

            currentIndex = 0;

            track.style.transform = "translateX(0)";

            requestAnimationFrame(updateCarousel);

        });

    });


    // ==========================================
    // WINDOW RESIZE
    // ==========================================

    window.addEventListener("resize", updateCarousel);


    // ==========================================
    // INITIAL POSITION
    // ==========================================

    updateCarousel();

});
