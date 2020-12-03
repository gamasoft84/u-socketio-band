const { v4: uuid } = require('uuid');

class Band {
    constructor(name) {
        this.id = uuid();
        this.name = name;
        this.values = 0;

    }
}

module.exports = Band;