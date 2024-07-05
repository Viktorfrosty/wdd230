const password = document.querySelector("#passsword1");

const verification = document.querySelector("#verification");

password.addEventListener("focusout", checkSamePassword);

verification.addEventListener("focusout", checkSamePassword);

function checkSamePassword() {

    if (verification.value == "" || verification.value == "" && password.value == "") {
        verification.title = "The password needs to match.";
    } else if (verification.value !== password.value) {
        verification.title = "The passwords doesn't match.";
        alert("The passwords doesn't match.")
        password.value = "";
        verification.value = "";
        password.focus();
    } else {
        verification.title = "The passwords match.";
    }

}