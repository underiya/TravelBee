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
    const dateInput = document.createElement('input');    
    dateInput.type = 'date' ;
    form.appendChild(dateInput);
    
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

        const bookingData = {
            from : fromValue,
            to : toValue,
            date : dateValue
        };
          // fetch booking data
    let bookingURL = "https://657c1c05394ca9e4af157453.mockapi.io/bookings/bookings";
    fetch(bookingURL,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(bookingData)
    })
        .then(res=>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data=>{
            displayBookingDetails(data);
            // alert(`Your booking is successful!\nDetails:\nFrom:${data.from}\nTo:${data.to}\nDate:${data.date}`);
        })
        .catch(error=>{
            console.error(error);
            alert("There was an error submitting your booking. Please try again.");
        })
    });
    let popup = document.getElementById("close");
    popup.addEventListener('click',(e)=>{
        closeModal();
    })
function displayBookingDetails(data) {
    const modal = document.getElementById('bookingModal');
    const detailsParagraph = document.getElementById('bookingDetails');

    // Populate the modal content with booking details
    detailsParagraph.textContent = `Your booking is successful!   Details:  From:${data.from}  To:${data.to}  Date:${data.date}`;

    // Display the modal
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
}

    // Append the form to the container
    const formContainer = document.getElementById('booking-form-container');
    formContainer.innerHTML = ''; 
    formContainer.appendChild(form);
}
