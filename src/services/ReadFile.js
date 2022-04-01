const readline = require('readline');
const fs = require('fs');
const _ = require("lodash");
const moment = require('moment');
const { ItineraryFile }= require('../models/ItineraryFile');




class ReadFile {
    constructor() {
             this.lineReader = readline.createInterface({ input: fs.createReadStream('test.dat') });
    }
        readFile(){
          this.lineReader.on('line',line => {
                  this.generateItinerary(line);
          });

        }

         generateItinerary(line){
           let itineraryToInsert;
           let lineArray = _.trim(line).split(';');
           itineraryToInsert = new ItineraryFile(lineArray);
           console.log(JSON.stringify(itineraryToInsert));
           return itineraryToInsert;
       }

}
module.exports = new ReadFile();
