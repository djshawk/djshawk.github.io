// Function to show the buttons after the video finishes playing
function showButtons() {
  var promposalButtons = document.getElementById("promposalButtons");
  promposalButtons.classList.remove("hidden");
}

// Function to show the message based on the selected button
function showMessage(response) {
  var messageContainer = document.getElementById("messageContainer");
  var message = document.getElementById("message");

  if (response === "Yes") {
    // Display flower bouquet emojis
    message.innerHTML = "🌸🌷🌺";
    // Simulate sending an email (replace with your own implementation)
    simulateEmailSending();
  } else if (response === "No") {
    message.innerHTML = "Sorry, that's not an option.";
  }

  messageContainer.classList.remove("hidden");
}

// Simulate email sending process
function simulateEmailSending() {
  // Replace with your own implementation to send an email
  // This is a placeholder to show a console message
  console.log("Email sent!");
}

// Event listener to show buttons after the video finishes playing
var promVideo = document.getElementById("promVideo");
promVideo.addEventListener("ended", showButtons);
