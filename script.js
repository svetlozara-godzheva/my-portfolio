const projectDetailsButtons = document.querySelectorAll(".project-details-btn");

projectDetailsButtons.forEach(button => {
    button.addEventListener("click", function (event) {
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

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function (e) {
    checkName(e);
    checkEmail(e);
    checkMessage(e);
});

function checkName(e) {
    const nameInput = document.getElementById("name");
    /**
   * @type {string} 
   */
    const nameValue = nameInput.value;

    const messageElement = document.getElementById("name-error");

    if (nameValue.trim() === "") {
        messageElement.innerHTML = "You should enter your name"
        e.preventDefault();
    } else {
        messageElement.innerHTML = "";
    }
}

function checkEmail(e) {
    const emailInput = document.getElementById("email");
    /**
   * @type {string} 
   */
    const emailValue = emailInput.value;

    const messageElement = document.getElementById("email-error");

    if (emailValue.trim() === "") {
        messageElement.innerHTML = "You should enter an email"
        e.preventDefault();
    } else {
        messageElement.innerHTML = "";
    }
}

function checkMessage(e) {
    const messageInput = document.getElementById("message");
    /**
   * @type {string} 
   */
    const messageValue = messageInput.value;

    const messageElement = document.getElementById("message-error");

    if (messageValue.trim() === "") {
        messageElement.innerHTML = "You should enter a message";
        e.preventDefault();
    } else {
        messageElement.innerHTML = "";
    }
}

