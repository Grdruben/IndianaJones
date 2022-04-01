
const fs = require('fs');
const readline = require('readline');
const {Itinerary} = require('./src/models/Itinerary');
const moment = require('moment');

 function main(H,VD,VA){
    const lineReader = readline.createInterface({
      input: fs.createReadStream('test.dat')
    });
    let departureRoutes = new Array();
    lineReader.on('line',line => {
      const lineArray = line.split(";");
      let itineraryDoc = new Itinerary(lineArray);
                  let myItinerary = {
                      HD: lineArray[0],
                      V1: lineArray[1],
                      V2: lineArray[2],
                      D: lineArray[3],
                  };
            itineraryDoc.data.itineraryList.push(myItinerary);
/*find possible departures times and check */
            let validTown = itineraryDoc.data.itineraryList[0].V1;
            let validTime = itineraryDoc.data.itineraryList[0].HD;
            let beginningTime =  moment(H,'HH:mm');
            let flexibleTime =  moment(validTime,'HH:mm');
            if ((validTown == VD) && (beginningTime.format('HH:mm')<flexibleTime.format('HH:mm'))) {
               console.log(departureRoutes.concat(itineraryDoc.data.itineraryList));
            }
    });

  }
main('08h20','Paris','Berlin');
