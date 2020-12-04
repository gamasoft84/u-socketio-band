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
            //show vote for band
            socket.on('votar-banda',(id)=>{
                this.bandList.increaseVots(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('delete-band',(id)=>{
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('name-band',({id,name})=>{
                this.bandList.changeBandName(id,name);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('new-band',(name)=>{
                this.bandList.addBand(name);
                this.io.emit('current-bands', this.bandList.getBands());
            });

        });
    }


}


module.exports = Sockets;