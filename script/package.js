// Function to fetch and display travel packages
const packagesContainer = document.getElementById("packages-container");
const packagesURL = "https://657c1c05394ca9e4af157453.mockapi.io/bookings/travel_packages";
const packagesPerPage = 16;
let loadedPackages = 0;
let isLoading = false;

function fetchAndDisplayPackages() {
    if (isLoading) return;

    isLoading = true;

    // Fetch travel packages
    fetch(`${packagesURL}?_page=1&_limit=${packagesPerPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display travel packages
            displayPackages(data);
            loadedPackages += packagesPerPage;
            isLoading = false;
        })
        .catch(error => {
            console.error(error);
            alert("There was an error fetching travel packages. Please try again!");
            isLoading = false;
        });
}

// Function to display travel packages in cards
function displayPackages(packages) {
    for (let i = 0; i < packages.length; i++) {
        const packageItem = packages[i];
        const card = createCard(packageItem);
        packagesContainer.appendChild(card);
    }
}

// Function to create a card
function createCard(packageItem) {
    const card = document.createElement('div');
    card.className = 'package-card';

    const image = document.createElement('div');
    const img = document.createElement('img');
    img.src = packageItem.image;
    image.append(img);

    const destination = document.createElement('h3');
    destination.textContent = `Destination : ${packageItem.destination}`;

    const activities = document.createElement('p');
    activities.innerHTML = `<strong> Activities : </strong> ${packageItem.activities}`;

    const days = document.createElement('p');
    days.innerHTML = `<strong> Days : ${packageItem.days} N </strong>`;

    const price = document.createElement('h4');
    price.textContent = `Price: $${packageItem.price}`;

    card.append(image, destination, activities, days, price);

    return card;
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPackages);

// Infinite Scrolling
window.addEventListener("scroll", () => {
    let { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    if (scrollHeight - clientHeight <= Math.ceil(scrollTop) + 10 && loadedPackages < 100) {
        fetchAndDisplayPackages();
    }
});
