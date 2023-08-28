// Get references to the popup and buttons
const openRegisterButton = document.getElementById("registerButton");
const popupRegister = document.getElementById("registerBox");
const background_popup = document.querySelector("main");
const popup = document.getElementById("loginBox");
const openPopupButton = document.getElementById("loginButton");
const closePopupButton = document.getElementById("closeButton");
const form_login = document.getElementById("formLogin");
let isRegisterWindow = false;

const children_popup = popup.children;

// Open the popup when the "Open Popup" button is clicked
openPopupButton.addEventListener("click", function () {
    popup.style.display = "flex";
});

// Close the popup when the close button or the background is clicked
closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
});

// Close the popup when the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === background_popup) {
        popup.style.display = "none";
    }
});
openRegisterButton.addEventListener("click", function () {
    if(!isRegisterWindow) {
        popupRegister.style.display = "flex";
    }
    else{
        popupRegister.style.display = "none";
    }
    isRegisterWindow=!isRegisterWindow;
});
