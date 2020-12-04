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
        this.bands = this.bands.map(band => {
            console.log('entra',band);
            console.log('id', band.id,'__',id);
            if (band.id === id) {
                band.votes += 1;
            }
            return band;
        });
    }

    changeBandName(id, newName) {
        this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
           return band;
        });
    }
}



module.exports = BandList;