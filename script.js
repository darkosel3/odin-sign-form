function matchPassword(event) {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    let passwordInput = document.querySelector("#password");
    let confirmInput = document.querySelector("#confirmPassword");

    let error = document.querySelector("#error");
    if (password != confirmPassword) {
        error.textContent = "*passwords do not match";
        passwordInput.style.borderColor = "red";
        confirmInput.style.borderColor = "red";
        event.preventDefault()
    }
    else {
        error.textContent = "";
        passwordInput.style.borderColor = "";
        confirmInput.style.borderColor = "";

    }
}
