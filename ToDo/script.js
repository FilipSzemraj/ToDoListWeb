// Get references to the popup and buttons
const background_popup = document.querySelector("main");
const popup = document.getElementById("login_box");
const openPopupButton = document.getElementById("login_button");
const closePopupButton = document.getElementById("close_button");

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
