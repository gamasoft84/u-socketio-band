const Band = require("./band");

class BandList {
    constructor() {
        this.bands = [
            new Band('Metallica'),
            new Band('Heros del Silencio'),
            new Band('MetaBon Jovi'),
            new Band('Breaking Benjamin'),
        ];
    }

    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }

    removeBand(id) {
        this.bands = this.bands.filter(band => band.id != id);
    }

    getBands() {
        return this.bands;
    }

    increaseVots(id) {
         this.bands.map(band => {
            if (band.id === id) {
                band.values += 1;
            }
            return this.band;
        });
    }

    changeBandName(id, newName) {
        console.log('id',id);
        console.log('newName',newName);
        console.log('ERROR:', id, newName, this.bands);
        this.bands.map(band => {

            if (band.id === id) {
                band.name = newName;
            }
           return this.band;
        });
    }
}



module.exports = BandList;