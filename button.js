// Function to toggle the display of the text box
function toggleTextBox(textBoxId) {
  const textBox = document.getElementById(textBoxId);
  if (!textBox) {
    console.error(`Element with ID ${textBoxId} not found`);
    return;
  }
  
  if (textBox.style.display === "none" || getComputedStyle(textBox).display === "none") {
    textBox.style.display = "block"; // Show the text box
  } else {
    textBox.style.display = "none"; // Hide the text box
  }
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
  // Add event listeners for each button
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  
  if (button1) {
    button1.addEventListener("click", function() {
      toggleTextBox("invisible1");
    });
  }
  
  if (button2) {
    button2.addEventListener("click", function() {
      toggleTextBox("invisible2");
    });
  }
  
  if (button3) {
    button3.addEventListener("click", function() {
      toggleTextBox("invisible3");
    });
  }

  if (button4) {
    button4.addEventListener("click", function() {
      toggleTextBox("invisible4");
    });
  }
});