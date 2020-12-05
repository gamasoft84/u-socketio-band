import React, { useContext } from 'react';
import {SocketContext} from '../context/SocketContext';
import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';




function HomePage() {

  const {online} = useContext(SocketContext);
  
/* const [bands, setBands] = useState([]);
 */

/* useEffect(() => {
  socket.on('current-bands', (bands)=>{
    setBands(bands);
  })
}, [socket]) */


/* const votar = (id) =>{
  socket.emit('votar-banda',id);
}


const deleteBand = (id) =>{
  console.log(id);
  socket.emit('delete-band',id);
}

const nameBand = (id,name) =>{
  console.log(id,name);
  socket.emit('name-band',{id,name});
} */

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status: {
            online 
            ? <span className="text-success">Online</span>
            : <span className="text-danger">Offline</span>
          }
          
          
        </p>
      </div>

      <h3>BandNames</h3>
      <hr/>
      <div className="row">
        <div className="col-8">
         {/*  <BandList data={bands} votar={votar} deleteBand={deleteBand} nameBand={nameBand}/> */}
        </div>
        <div className="col-4">
         {/*  <BandAdd/> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
