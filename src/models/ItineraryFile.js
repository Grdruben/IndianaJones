const { Itinerary } = require('./Itinerary');

class  ItineraryFile extends Itinerary {
    constructor(lineArray){
        super();
        this.data.itineraryList = this.buildData(lineArray);
    }

    buildData(lineArray) {
        const itineraryData = {};
        itineraryData["HD"] = lineArray[0];
        itineraryData["V1"] = lineArray[1];
        itineraryData["V2"] = lineArray[2];
        itineraryData["D"] = lineArray[3];
        return itineraryData;
    }
}
module.exports.ItineraryFile = ItineraryFile;
