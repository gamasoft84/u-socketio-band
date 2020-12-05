import React,{useState, useContext}from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {

    const [name, setName] = useState('');
    const {socket} = useContext(SocketContext);


    const onSubmit = (ev) =>{
        ev.preventDefault();
        console.log(name);
        if(name.trim().length> 0){
            socket.emit('new-band',name);
            setName('');
        }
    }

  

    return (
        <>
            <h3>Add Band</h3>
            <form onSubmit={onSubmit}>
                <input className="form-control" placeholder="Name Band" value={name} onChange={(ev)=> setName(ev.target.value)}/>
            </form>

        </>
    )
}
