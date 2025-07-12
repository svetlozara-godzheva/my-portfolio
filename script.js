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
    let isFormValid = true;
    isFormValid = isNameValid(e) && isFormValid;
    isFormValid = isEmailValid(e) && isFormValid;
    isFormValid = isMessageValid(e) && isFormValid;
    e.preventDefault();

    const form = document.getElementById("contact-form");
    if (isFormValid) {
        form.classList.add("hidden");

        //TODO: API call should be made here

        var typed = new Typed('#greeting', {
            strings: ["Thank you for your message! I look forward to connecting with you!"],
            typeSpeed: 25,
        });
    }
});

function isNameValid(e) {
    const nameInput = document.getElementById("name");
    /**
   * @type {string} 
   */
    const nameValue = nameInput.value;

    const messageElement = document.getElementById("name-error");

    if (nameValue.trim() === "") {
        messageElement.innerHTML = "You should enter your name."
        return false;
    } else {
        messageElement.innerHTML = "";
    }
    return true;
}

function isEmailValid(e) {
    const emailInput = document.getElementById("email");
    /**
   * @type {string} 
   */
    const emailValue = emailInput.value;

    const messageElement = document.getElementById("email-error");

    if (emailValue.trim() === "") {
        messageElement.innerHTML = "You should enter an email."
        return false;
    } else {
        messageElement.innerHTML = "";
    }
    return true;
}

function isMessageValid(e) {
    const messageInput = document.getElementById("message");
    /**
   * @type {string} 
   */
    const messageValue = messageInput.value;

    const messageElement = document.getElementById("message-error");

    if (messageValue.trim() === "") {
        messageElement.innerHTML = "You should enter a message";
        return false;
    } else {
        messageElement.innerHTML = "";
    }
    return true;
}

