var Mutantchamber = document.getElementById("Mchamber");

// Get the button that opens the modal
var btn = document.getElementById("mChamberBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  Mutantchamber.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  Mutantchamber.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Mutantchamber) {
    Mutantchamber.style.display = "none";
  }
}