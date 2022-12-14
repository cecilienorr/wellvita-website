function openPopup() {
  // Get the element with the ID "popup-content"
  var popup = document.getElementById("popup-content");

  // Set the display property to "block" to make the pop-up visible
  popup.style.display = "block";
}

// Get the button with the ID "popup-button"
var button = document.getElementById("popup-button");

// Add an event listener to the button that calls the "openPopup" function when the button is clicked
button.addEventListener("click", openPopup);

function closePopup() {
  // Get the element with the ID "popup-content"
  var popup = document.getElementById("popup-content");

  // Set the display property to "none" to make the pop-up hidden
  popup.style.display = "none";
}

// Get the button with the ID "close-popup-button"
var button = document.getElementById("close-popup-button");

// Add an event listener to the button that calls the "closePopup" function when the button is clicked
button.addEventListener("click", closePopup);
