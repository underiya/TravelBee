// import { nav } from "./navbar.js";
// let navbar=document.querySelector(".navbar");
// navbar.innerHTML=nav;
//taking button
let btn = document.getElementById("book-now-btn");

//adding eventlistener on book now button
btn.addEventListener('click',()=>{
    showBookingForm();
})
function showBookingForm() {
    // Create a form element
    const form = document.createElement('form');
    
    // Create input for "From" city
    const fromInput = document.createElement('input');
    fromInput.type = 'text';
    fromInput.placeholder = 'Enter place of origin';
    form.appendChild(fromInput);

    // Create input for "To" city
    const toInput = document.createElement('input');
    toInput.type = 'text';
    toInput.placeholder = 'Enter Destination';
    form.appendChild(toInput);

    // Create input for departure date
    const departureDateInput = document.createElement('input');
    departureDateInput.type = 'date';
    form.appendChild(departureDateInput);
    
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.className = "submitButton";
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const fromValue = fromInput.value;
        const toValue = toInput.value;
        const dateValue = dateInput.value;
        console.log('From:', fromValue, 'To:', toValue, 'Date:', dateValue);
    });

    // Append the form to the container
    const formContainer = document.getElementById('booking-form-container');
    formContainer.innerHTML = ''; 
    formContainer.appendChild(form);
}
