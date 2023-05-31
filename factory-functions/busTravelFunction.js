function busTravel() {


    var pointsEntered = 0
    var selectedLocation = ""
    var singleTrips = 0
    var pricePerSingleTrip = 0
    var returnTrips = 0
    var pricePerReturnTrip = 0
    var enterPeakSeason = ""

    var dunoonPrice = 25
    var khayelitsaPrice = 40
    var mitchellsPrice = 30
    var dunoonPriceReturn = dunoonPrice * 2
    var khayelitsaPriceReturn = khayelitsaPrice * 2
    var mitchellsPricePeturn = mitchellsPrice * 2
    var percentage = 25 / 100


    //function to get points
    function getPoints(points) {
        pointsEntered = points
        return pointsEntered
    }

    //function to get location
    function getLocation(location) {
        selectedLocation = location
        return selectedLocation
    }



    // The price for a trip based on - travel time (peak or off-peak)
    function peak(peakSeason) {
        enterPeakSeason = peakSeason
        return enterPeakSeason
    }

    //if off peak khayelitsa is R40, Dunoon is R25 and Mitchells plain is R30 for single trip
    ////if off peak khayelitsa is R80, Dunoon is R50 and Mitchells plain is R60 for return trip
    // if on peak each price for the location increases by 25% for single and return
    //number of trips
    function numberOfSingleTrips() {
        //return number of single trips based on points and location
        //while keeping in mind the price
        if (pointsEntered && selectedLocation === "Dunoon" && enterPeakSeason === "offPeak") {
            singleTrips = pointsEntered / dunoonPrice
        } else if (pointsEntered && selectedLocation === "Mitchells" && enterPeakSeason === "offPeak") {
            singleTrips = pointsEntered / mitchellsPrice
        } else if (pointsEntered && selectedLocation === "Khayelitsha" && enterPeakSeason === "offPeak") {
            singleTrips = pointsEntered / khayelitsaPrice
        } else if (pointsEntered && selectedLocation === "Dunoon" && enterPeakSeason === "peak") {
            singleTrips = pointsEntered / (dunoonPrice + (dunoonPrice * percentage))
        } else if (pointsEntered && selectedLocation === "Mitchells" && enterPeakSeason === "peak") {
            singleTrips = pointsEntered / (khayelitsaPrice + (khayelitsaPrice * percentage))
        } else if (pointsEntered && selectedLocation === "Khayelitsha" && enterPeakSeason === "peak") {
            singleTrips = pointsEntered / (mitchellsPrice + (mitchellsPrice * percentage))
        }
        return singleTrips.toFixed()
    }
    // The cost price per trip (single)
    function getPricePerTripSingle() {
        //calculate price per single trip
        // if location is ..
        //price is ..
        if (selectedLocation === "Dunoon" && enterPeakSeason === "offPeak") {
            pricePerSingleTrip = dunoonPrice
        } else if (selectedLocation === "Mitchells" && enterPeakSeason === "offPeak") {
            pricePerSingleTrip = mitchellsPrice
        } else if (selectedLocation === "Khayelitsha" && enterPeakSeason === "offPeak") {
            pricePerSingleTrip = khayelitsaPrice
        } if (selectedLocation === "Dunoon" && enterPeakSeason === "peak") {
            pricePerSingleTrip = dunoonPrice + (dunoonPrice * percentage)
        } else if (selectedLocation === "Mitchells" && enterPeakSeason === "peak") {
            pricePerSingleTrip = mitchellsPrice + (mitchellsPrice * percentage)
        } else if (selectedLocation === "Khayelitsha" && enterPeakSeason === "peak") {
            pricePerSingleTrip = khayelitsaPrice + (khayelitsaPrice * percentage)
        }

        return pricePerSingleTrip.toFixed(2)
    }

    //number of return trips
    function numberOfReturnTrips() {
        //return double the number of single trips based on points and location
        //while keeping in mind the price
        if (pointsEntered && selectedLocation === "Dunoon" && enterPeakSeason === "offPeak") {
            returnTrips = pointsEntered / dunoonPriceReturn
        } else if (pointsEntered && selectedLocation === "Mitchells" && enterPeakSeason === "offPeak") {
            returnTrips = pointsEntered / mitchellsPricePeturn
        } else if (pointsEntered && selectedLocation === "Khayelitsha" && enterPeakSeason === "offPeak") {
            returnTrips = pointsEntered / khayelitsaPriceReturn
        } else if (pointsEntered && selectedLocation === "Dunoon" && enterPeakSeason === "peak") {
            returnTrips = pointsEntered / (dunoonPriceReturn + (dunoonPriceReturn * percentage))
        } else if (pointsEntered && selectedLocation === "Mitchells" && enterPeakSeason === "peak") {
            returnTrips = pointsEntered / (mitchellsPricePeturn + (mitchellsPricePeturn * percentage))
        } else if (pointsEntered && selectedLocation === "Khayelitsha" && enterPeakSeason === "peak") {
            returnTrips = pointsEntered / (khayelitsaPriceReturn + (khayelitsaPriceReturn * percentage))
        }

        return returnTrips.toFixed()
    }

    // The cost price per trip (return)
    function pricePerTripReturn() {
        //calculate price per return trip
        // if location is ..
        //price is 2x ...
        if (selectedLocation === "Dunoon" && enterPeakSeason === "offPeak") {
            pricePerReturnTrip = dunoonPriceReturn;
        } else if (selectedLocation === "Mitchells" && enterPeakSeason === "offPeak") {
            pricePerReturnTrip = mitchellsPricePeturn;
        } else if (selectedLocation === "Khayelitsha" && enterPeakSeason === "offPeak") {
            pricePerReturnTrip = khayelitsaPriceReturn;
        } else if (selectedLocation === "Dunoon" && enterPeakSeason === "peak") {
            pricePerReturnTrip = dunoonPriceReturn + (dunoonPriceReturn * percentage);
        } else if (selectedLocation === "Mitchells" && enterPeakSeason === "peak") {
            pricePerReturnTrip = mitchellsPricePeturn + (mitchellsPricePeturn * percentage);
        } else if (selectedLocation === "Khayelitsha" && enterPeakSeason === "peak") {
            pricePerReturnTrip = khayelitsaPriceReturn + (khayelitsaPriceReturn * percentage);
        }

        return pricePerReturnTrip.toFixed(2)
    }
    return {
        getPoints,
        getLocation,
        getPricePerTripSingle,
        numberOfReturnTrips,
        pricePerTripReturn,
        peak,
        numberOfSingleTrips,
    }
}