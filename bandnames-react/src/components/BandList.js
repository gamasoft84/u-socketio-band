import React,{useState,useEffect, useContext} from 'react'
import { SocketContext } from '../context/SocketContext';


export const BandList = () => {

    const [bands, setBands] = useState([]);
    const {socket} = useContext(SocketContext)

    useEffect(() => {
        socket.on('current-bands', (bands)=>{
            setBands(bands);
          })
          //desmount
          return () => socket.off('current-bands');
    }, [socket])

    const changeNameBand = (event, id) =>{
        //console.log(id);
        setBands( bands => bands.map( band => {
            if(band.id === id){
                band.name = event.target.value;
            }
            return band;
        }));
    } 

    const onBlurName = (id, name) => {
        socket.emit('name-band',{id,name});
    }

    const votar = (id) =>{
        socket.emit('votar-banda',id);
    }

    const deleteBand = (id) =>{
        console.log(id);
        socket.emit('delete-band',id);
      }


    const createRows =() =>{        
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td><button className="btn btn-primary" onClick={() => votar(band.id)}>+1</button></td>
                    <td><input className="form-control" value={band.name} onChange={(event)=> changeNameBand(event,band.id)} onBlur={() => onBlurName(band.id, band.name)}/></td>
                    <td><h3>{band.votes}</h3></td>
                    <td><button className="btn btn-danger" onClick={()=> deleteBand(band.id)}>Delete</button></td>
                </tr>
            ))
        );
    }



    return (
        <>
            <table className="table table-stripped">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Votes</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {createRows()}
            </tbody>
            </table>
        </>
    )
}
