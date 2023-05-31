//write tests to get prices for single trip for each location
//write tests to get price for return trips for each location
//number of trips to take for single trips for each location
//number of return trips to take for each location
//prices of trips for peak hours (single)
//prices of trips for peak hours (return)
describe('Bus Travel App', function(){
    it("should get number of single trips for dunoon during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(100)
        singleTrips.getLocation("Dunoon")
        singleTrips.peak("offPeak")

        assert.equal(4 ,singleTrips.numberOfSingleTrips())
    })
    it("should get number of single trips for Khayelitsha during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(180)
        singleTrips.getLocation("Khayelitsha")
        singleTrips.peak("offPeak")

        assert.equal(5 ,singleTrips.numberOfSingleTrips())
    })
    it("should get number of single trips for Mitchells during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(200)
        singleTrips.getLocation("Mitchells")
        singleTrips.peak("offPeak")

        assert.equal(7 ,singleTrips.numberOfSingleTrips())
    })
    it("should get number of single trips for dunoon during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(100)
        singleTrips.getLocation("Dunoon")
        singleTrips.peak("peak")

        assert.equal(3 ,singleTrips.numberOfSingleTrips())
    })
    it("should get number of single trips for Mitchells during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(200)
        singleTrips.getLocation("Mitchells")
        singleTrips.peak("peak")

        assert.equal(4 ,singleTrips.numberOfSingleTrips())
    })
    it("should get number of single trips for Khayelitsha during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getPoints(180)
        singleTrips.getLocation("Khayelitsha")
        singleTrips.peak("peak")

        assert.equal(5 ,singleTrips.numberOfSingleTrips())
    })
    it("should get prices for single trip for Dunoon during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Dunoon")
        singleTrips.peak("offPeak")

        assert.equal(25 ,singleTrips.getPricePerTripSingle())
    })
    it("should get prices for single trip for Khayelitsha during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Khayelitsha")
        singleTrips.peak("offPeak")

        assert.equal(40 ,singleTrips.getPricePerTripSingle())
    })
    it("should get prices for single trip for Mitchells during offpeak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Mitchells")
        singleTrips.peak("offPeak")

        assert.equal(30 ,singleTrips.getPricePerTripSingle())
    })
    it("should get prices for single trip to Dunoon during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Dunoon")
        singleTrips.peak("peak")

        assert.equal(31.25 ,singleTrips.getPricePerTripSingle())
    })
    it("should get prices for single trip to Khayelitsha during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Khayelitsha")
        singleTrips.peak("peak")

        assert.equal(50 ,singleTrips.getPricePerTripSingle())
    })
    it("should get prices for single trip to Mitchells during peak", function(){
        var singleTrips = busTravel()

        singleTrips.getLocation("Mitchells")
        singleTrips.peak("peak")

        assert.equal(37.50 ,singleTrips.getPricePerTripSingle())
    })
    it("should get number of return trips for Dunoon during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(100)
        returnTrips.getLocation("Dunoon")
        returnTrips.peak("peak")

        assert.equal(2 ,returnTrips.numberOfReturnTrips())
    })
    it("should get number of return trips  for Khayelitsha during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(400)
        returnTrips.getLocation("Khayelitsha")
        returnTrips.peak("peak")

        assert.equal(4 ,returnTrips.numberOfReturnTrips())
    })
    it("should get number of return trips for Mitchells during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(250)
        returnTrips.getLocation("Mitchells")
        returnTrips.peak("peak")

        assert.equal(3 ,returnTrips.numberOfReturnTrips())
    })
    it("should get number of return trips for Dunoon during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(200)
        returnTrips.getLocation("Dunoon")
        returnTrips.peak("offPeak")

        assert.equal(4 ,returnTrips.numberOfReturnTrips())
    })
    it("should get number of return trips for Khayelitsha during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(270)
        returnTrips.getLocation("Khayelitsha")
        returnTrips.peak("offPeak")

        assert.equal(3 ,returnTrips.numberOfReturnTrips())
    })
    it("should get number of return trips for Mitchells during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getPoints(320)
        returnTrips.getLocation("Mitchells")
        returnTrips.peak("offPeak")

        assert.equal(5 ,returnTrips.numberOfReturnTrips())
    })
    it("should get price of return trips for Dunoon during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Dunoon")
        returnTrips.peak("offPeak")

        assert.equal(50 ,returnTrips.pricePerTripReturn())
    })
    it("should get price of return trips for  Khayelitsha during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Khayelitsha")
        returnTrips.peak("offPeak")

        assert.equal(80 ,returnTrips.pricePerTripReturn())
    })
    it("should get price of return trips for Mitchells during offpeak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Mitchells")
        returnTrips.peak("offPeak")

        assert.equal(60 ,returnTrips.pricePerTripReturn())
    })
    it("should get price of return trips for dunoon during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Dunoon")
        returnTrips.peak("peak")

        assert.equal(62.50 ,returnTrips.pricePerTripReturn())
    })
    it("should get price of return trips for Khayelitsha during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Khayelitsha")
        returnTrips.peak("peak")

        assert.equal(100 ,returnTrips.pricePerTripReturn())
    })
    it("should get price of return trips for Mitchells during peak", function(){
        var returnTrips = busTravel()

        returnTrips.getLocation("Mitchells")
        returnTrips.peak("peak")

        assert.equal(75 ,returnTrips.pricePerTripReturn())
    })
})