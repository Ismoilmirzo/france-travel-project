// customize.js

function calculatePrice() {
    var parisLocation = document.getElementById("paris-location").value;
    var flightClass = document.getElementById("flight-class").value;
    var inFlightMeals = document.querySelectorAll('input[name="in-flight-meal"]:checked');

    if (parisLocation && flightClass && inFlightMeals.length > 0) {
        var basePrice = 1000; // Base price for the package

        // Adjust the price based on user choices
        if (parisLocation === "louvre-museum") {
            basePrice += 200;
        } else if (parisLocation === "montmartre") {
            basePrice += 300;
        }

        if (flightClass === "business") {
            basePrice += 500;
        } else if (flightClass === "first-class") {
            basePrice += 1000;
        }

        // Add additional cost for each selected in-flight meal
        inFlightMeals.forEach(function (meal) {
            basePrice += 50;
        });

        // Display the result
        document.getElementById("approx-price").textContent = "$" + basePrice;
        document.getElementById("result-container").style.display = "block";
    } else {
        alert("Please fill in all the details to calculate the price.");
    }
}
