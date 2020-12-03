const BandList = require("./band-list");

class Sockets {

    constructor(io) {

        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            // Emitir al cliente conectado todas las bandas actuales
            console.log('Cliente conectado', socket.id);
            socket.emit('current-bands', this.bandList.getBands());
        });
    }


}


module.exports = Sockets;