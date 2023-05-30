// Function to show the buttons after the video finishes playing
function showButtons() {
  var promposalButtons = document.getElementById("promposalButtons");
  promposalButtons.style.visibility = "visible";
}

// Function to show the message
function showMessage(response) {
  if (response === "Yes") {
    // Redirect to another page
    window.location.href = "yes/yes-page.html";
  } else if (response === "No") {
    alert("I learnt 3 coding languages overnight to be able to make this, NO IS NOT AN OPTION....CLICK YES OR I WILL STAB U");
  }
}

// Auto-play the video when the page loads
window.addEventListener("load", function() {
  var promVideo = document.getElementById("promVideo");
  promVideo.play();
  promVideo.addEventListener("ended", showButtons);
});
