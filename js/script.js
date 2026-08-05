document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".projects-track");
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const previousButton = document.getElementById("previous-project");
    const nextButton = document.getElementById("next-project");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let currentIndex = 0;
    let visibleCards = [...cards];


    function updateCarousel() {

        if (visibleCards.length === 0) {

            previousButton.disabled = true;
            nextButton.disabled = true;
            return;

        }

        if (currentIndex >= visibleCards.length) {
            currentIndex = visibleCards.length - 1;
        }

        if (currentIndex < 0) {
            currentIndex = 0;
        }

        const currentCard = visibleCards[currentIndex];

        track.style.transform =
            `translateX(-${currentCard.offsetLeft}px)`;

        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === visibleCards.length - 1;

    }


    nextButton.addEventListener("click", function () {

        if (currentIndex < visibleCards.length - 1) {

            currentIndex++;
            updateCarousel();

        }

    });


    previousButton.addEventListener("click", function () {

        if (currentIndex > 0) {

            currentIndex--;
            updateCarousel();

        }

    });


    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.dataset.filter.toLowerCase();

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            cards.forEach(card => {

                const tools = card.dataset.tools
                    .toLowerCase()
                    .split(",")
                    .map(tool => tool.trim());

                const matches =
                    selectedFilter === "all" ||
                    tools.includes(selectedFilter);

                card.style.display = matches ? "grid" : "none";

            });

            visibleCards = cards.filter(card => {
                return card.style.display !== "none";
            });

            currentIndex = 0;

            requestAnimationFrame(updateCarousel);

        });

    });


    window.addEventListener("resize", updateCarousel);

    updateCarousel();

});
