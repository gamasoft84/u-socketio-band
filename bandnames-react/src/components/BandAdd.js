import React,{useState}from 'react'
import { useSocket } from '../hooks/useSocket';

export const BandAdd = () => {

    const [name, setName] = useState('');
    const {socket,online} = useSocket('http://localhost:4000/');


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
