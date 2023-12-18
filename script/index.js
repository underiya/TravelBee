import { nav } from "./navbar.js";
import { footer } from "./footer.js";

let navbar=document.querySelector(".aboutnav")
navbar.innerHTML=nav;


let foot=document.querySelector("footer");
foot.innerHTML=footer;



function displayPopup() {
    setTimeout(function () {
        document.getElementById('popup-container').style.display = 'block';
      }, 3000);
    }
  
    // Function to close the popup
    function closePopup() {
      document.getElementById('popup-container').style.display = 'none';
      document.body.style.overflow = 'auto'; // Allow scrolling when the popup is closed
    }
  
    // Call the displayPopup function when the page loads
    window.onload = displayPopup;
  
    // Attach the closePopup function to the close button
    document.getElementById('close-btn').addEventListener('click', closePopup);