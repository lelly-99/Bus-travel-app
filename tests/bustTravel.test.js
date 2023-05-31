//write tests to get prices for single trip for each location
//write tests to get price for return trips for each location
//number of trips to take for single trips for each location
//number of return trips to take for each location
//prices of trips for peak hours (single)
//prices of trips for peak hours (return)
describe('Bus Travel App', function(){
    it("should get number of single trips during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(100)
        singleTrips.getLocation("Dunoon")
        singleTrips.peak("offPeak")

        assert.equal(4 ,singleTrips.numberOfSingleTrips())
    })
    it("should get number of single trips during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(100)
        singleTrips.getLocation("Dunoon")
        singleTrips.peak("peak")

        assert.equal(3 ,singleTrips.numberOfSingleTrips())
    })
    it("should get prices for single trip during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Dunoon")
        singleTrips.peak("offPeak")

        assert.equal(25 ,singleTrips.getPricePerTripSingle())
    })
    it("should get prices for single trip during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Dunoon")
        singleTrips.peak("peak")

        assert.equal(31.25 ,singleTrips.getPricePerTripSingle())
    })
    it("should get number of return trips during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(100)
        returnTrips.getLocation("Dunoon")
        returnTrips.peak("peak")

        assert.equal(2 ,returnTrips.numberOfReturnTrips())
    })
    it("should get number of return trips during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(100)
        returnTrips.getLocation("Dunoon")
        returnTrips.peak("offPeak")

        assert.equal(2 ,returnTrips.numberOfReturnTrips())
    })
    it("should get price of return trips during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Dunoon")
        returnTrips.peak("offPeak")

        assert.equal(50 ,returnTrips.pricePerTripReturn())
    })
    it("should get price of return trips during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Dunoon")
        returnTrips.peak("peak")

        assert.equal(62.50 ,returnTrips.pricePerTripReturn())
    })
})