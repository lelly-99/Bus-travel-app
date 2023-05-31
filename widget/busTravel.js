// //get references
//points
var enteredPoints = document.querySelector(".enteredPoints");
//dropdown
var selectElement = document.querySelector(".dropDown");
//peak season
var season = document.querySelectorAll(".time");
//checkbox
var checkboxElement = document.querySelector(".checkbox");
//button
var calculateButton = document.querySelector(".calculateButton");

//innerHTML
var numberOfSingleTrips = document.querySelector(".numberOfSingleTrips");
var pricePerSingleTrip = document.querySelector(".pricePerSingleTrip");
var numberOfReturnTrips = document.querySelector(".numberOfReturnTrips");
var pricePerReturnTrip = document.querySelector(".pricePerReturnTrip");

//instance
var busTravelFunction = busTravel()


//check for radio button
function getSelectedSeason() {
    var selectedSeason = "";
    season.forEach(function (radio) {
        if (radio.checked) {
            selectedSeason = radio.value;
        }
    });
    return selectedSeason;
}

// //add event listener
calculateButton.addEventListener("click", function () {
    var selectedSeason = getSelectedSeason();

    busTravelFunction.getPoints(Number(enteredPoints.value));
    busTravelFunction.getLocation(selectElement.value);
    busTravelFunction.peak(selectedSeason);

    var singleTrips = busTravelFunction.numberOfSingleTrips();
    var pricePerSingle = busTravelFunction.getPricePerTripSingle();
    var returnTrips = busTravelFunction.numberOfReturnTrips();
    var pricePerReturn = busTravelFunction.pricePerTripReturn();


    numberOfSingleTrips.innerHTML = singleTrips;

    pricePerSingleTrip.innerHTML = pricePerSingle;

    if (checkboxElement.checked === true) {
        numberOfReturnTrips.innerHTML = returnTrips;
    }

    if (checkboxElement.checked === true) {
        pricePerReturnTrip.innerHTML = pricePerReturn;
    }
})







