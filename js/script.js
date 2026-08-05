document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".projects-track");
    const cards = document.querySelectorAll(".project-card");
    const previousButton = document.getElementById("previous-project");
    const nextButton = document.getElementById("next-project");

    let currentIndex = 0;

    console.log("Track:", track);
    console.log("Number of projects:", cards.length);
    console.log("Previous button:", previousButton);
    console.log("Next button:", nextButton);

    function showProject() {

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === cards.length - 1;

        console.log("Current project:", currentIndex + 1);

    }

    nextButton.addEventListener("click", function () {

        console.log("Next clicked");

        if (currentIndex < cards.length - 1) {

            currentIndex++;
            showProject();

        }

    });

    previousButton.addEventListener("click", function () {

        console.log("Previous clicked");

        if (currentIndex > 0) {

            currentIndex--;
            showProject();

        }

    });

    showProject();

});
