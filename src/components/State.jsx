import React, { useEffect, useState } from 'react'

const State = () => {
    //Agregamos un estado con el hook useState
    const [state, setSate] = useState(0);

    //Usando el hook useEfect el cual maneha el ciclo de vida del componente

    useEffect(() => {
        console.log(state);
    }, []);
    
    const handleClick = () => {
        setSate(state + 1);
    }

    return (
        <div>
            <h1>Use State</h1>
            <hr />
            Cuenta:{state}
            <br />
            <button onClick={handleClick} >Aumentar</button>
        </div>
    );
}

export default State
