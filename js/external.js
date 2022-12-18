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


function functionName() {
  var fname = document.getElementById("fName");
  var lname = document.getElementById("lName");
  var email = document.getElementById("email");
  document.getElementById("newsletter").innerHTML = "Hello " + fname.value + " " + lname.value + "." + " We will send our latest newsletter to " + email.value + ". To unsubscribe to our newsletter click on your email.";

}
function changeStyle() {
  document.getElementById("newsletter").innerHTML = "You have successfully unsubscribed to Mind Over Matters newsletter. If this was a mistake double click to undo."
  document.getElementById("newsletter").style.fontStyle = "Noto Sans";
  document.getElementById("newsletter").style.fontSize = "20px";
  document.getElementById("newsletter").style.color = "black";
  document.getElementById("newsletter").style.backgroundColor = "red";
  document.getElementById("newsletter").style.textAlign = "center";
}

function changeStyle2() {
  var fname = document.getElementById("fName");
  var lname = document.getElementById("lName");
  document.getElementById("newsletter").innerHTML = "Great to have you back. Have a wonderful day " + fname.value + " " + lname.value + ".";
  document.getElementById("newsletter").style.fontStyle = "Noto Sans";
  document.getElementById("newsletter").style.fontSize = "20px";
  document.getElementById("newsletter").style.color = "black";
  document.getElementById("newsletter").style.backgroundColor = "lightgreen";
  document.getElementById("newsletter").style.textAlign = "center";
}
//This code is for the about us page Newsletter form and was Created by Charlie -->

function functionReference() {
  document.getElementById("newsletter").innerHTML = "Video 1 belongs to Ted-Ed and was Written by Madhumita Murgia. Video 2 belongs to AsapSCIENCE. Created by: Mitchell Moffit and Gregory Brown. Written by: Amanda Edward, Rachel Salt, Mitchell Moffit & Gregory Brown. Illustrated by: Max Simmons. Edited by: Sel Ghebrehiwot. Video 3 belongs to Ted-Ed. Speaker: Leon Taylor";

}
function functionExplain() {
  document.getElementById("newsletter").innerHTML = "Mind Over Matter is not affiliated with any of the below links and does not own any of the below content. We believe these videos will be beneficial to anyone interested in understanding Mental Health. The owner of these videos are referenced to view these references click me.";

}
