// Function to show the buttons after the video finishes playing
function showButtons() {
  var promposalButtons = document.getElementById("promposalButtons");
  promposalButtons.classList.remove("hidden");
}

// Function to show the message based on the selected button
function showMessage(response) {
  var messageContainer = document.getElementById("messageContainer");
  var message = document.getElementById("message");
  message.textContent = response;
  messageContainer.classList.remove("hidden");
}

// Event listener to show buttons after the video finishes playing
var promVideo = document.getElementById("promVideo");
promVideo.addEventListener("ended", showButtons);