function showDetails(serviceId) {
    var serviceDetails = document.getElementById(serviceId);

    if (serviceDetails.style.display === "block") {
        serviceDetails.style.display = "none";
    } else {
        serviceDetails.style.display = "block";
    }
}
