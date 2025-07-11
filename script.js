const projectDetailsButtons = document.querySelectorAll(".project-details-btn");

projectDetailsButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        /**
        * @type {HTMLButtonElement}
        */
        const clickedElement = event.target;
        console.log("Clicked element:", clickedElement);
        const elementId = clickedElement.getAttribute("show");
        console.log(elementId);

        const hiddenElement = document.getElementById(elementId);
        if (hiddenElement.classList.contains("hidden")) {
            hiddenElement.classList.remove("hidden");
            clickedElement.innerHTML = "Show Less";
        } else {
            hiddenElement.classList.add("hidden");
            clickedElement.innerHTML = "Show More";
        }
    });
});