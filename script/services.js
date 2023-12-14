import { nav } from "./navbar.js";
let navbar=document.querySelector(".navbar")
navbar.innerHTML=nav;

function showDetails(serviceId) {
    var serviceDetails = document.getElementById(serviceId);

    if (serviceDetails.style.display === "block") {
        serviceDetails.style.display = "none";
    } else {
        serviceDetails.style.display = "block";
    }
}

//bookflight
function bookFlight() {
    var departureCity = document.getElementById('departureCity').value;
    var destination = document.getElementById('destination').value;
    var departureDate = document.getElementById('departureDate').value;

    // Perform actions with the booking details (e.g., send data to server)
    console.log("Booking Flight:");
    console.log("Departure City: " + departureCity);
    console.log("Destination: " + destination);
    console.log("Departure Date: " + departureDate);

    // You can customize this part to send the data to a server for further processing
    // For now, we'll just log the details to the console
    alert("Flight booked successfully!");
    showFlightBookingForm(); // Hide the form after submission
}

//flightbookingform
function showFlightBookingForm() {
    var flightBookingForm = document.getElementById('flightBookingForm');

    if (flightBookingForm.style.display === "none") {
        flightBookingForm.style.display = "block";
    } else {
        flightBookingForm.style.display = "none";
    }
}
