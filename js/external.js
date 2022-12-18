function displayDataText(image) {
  var dataText = image.dataset.text;
  // Get the div element where the text will be displayed
  var textDisplay = document.getElementById('text-display');
  textDisplay.style.color = "white";
  textDisplay.style.border = "solid 3px lightgreen";
  textDisplay.style.fontFamily = "Noto Sans";
  textDisplay.style.textAlign = "center";
  textDisplay.style.fontSize = "25px";

  textDisplay.innerHTML = dataText;
  setTimeout(function() {
    textDisplay.innerHTML = '';
  }, 10000); // 10 seconds
};
//This code is for the gallery text and was Created by Charlie with help from here Reference: https://www.w3schools.com/jsref/-->

const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  if (!this.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    this.setCustomValidity('Please enter a valid email address');
  } else {
    this.setCustomValidity('');
  }
});

const ageInput = document.getElementById("age");
ageInput.addEventListener('input', function() {
  if (this.value < 18) {
    this.setCustomValidity('You must be over 18 to submit this form');
  } else {
    this.setCustomValidity('');
  }
});

// Validate form before submission
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    // Display error messages
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    const errorText = document.createTextNode('Please fill out all required fields');
    errorDiv.appendChild(errorText);
    form.before(errorDiv);
  }
});
//This validation code was created by Charlie with help from here Reference: https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/ -->
