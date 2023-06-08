function showPopup(text) {
  var popupText = document.getElementById("popupText");
  popupText.innerHTML = text.replace(/\n/g, "<br>");

  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the popup
function closePopup() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";

  var popupText = document.getElementById("popupText");
  popupText.textContent = "";
}

function transitionShadow() {
    var image4 = document.getElementsByClassName("image4")[0];
    
    // Add transitioned class to the desired images
    image4.classList.add("transitioned");
}

function showImage() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "block";
}
