import React,{useState}from 'react'

export const BandAdd = ({newBand}) => {

    const [valor, setValor] = useState('');

    const onSubmit = (ev) =>{
        ev.preventDefault();
        console.log(valor);
        if(valor.trim().length> 0){
            newBand(valor);
            setValor('');
        }
    }

  

    return (
        <>
            <h3>Add Band</h3>
            <form onSubmit={onSubmit}>
                <input className="form-control" placeholder="Name Band" value={valor} onChange={(ev)=> setValor(ev.target.value)}/>
            </form>

        </>
    )
}
