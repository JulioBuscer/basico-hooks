import React, { useState, useEffect } from 'react'

const Effect = () => {
    //Agregamos un estado 
    const [users, setUsers] = useState([])


    //Agregando el useEffect correctamente.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
    }, [])

    //Agregamos una funcion para hacer una peticion a una API (De esta forma se cicla infinitamente)
    const getUsuarios = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
    }

    //getUsuarios();

    console.log(users);

    const handleSubmit = (e) => {
        //Evitamos el comportamiento normal del submit
        e.preventDefault();
        console.log(e);
    }



    return (
        <>
            <h1>Use Efect</h1>
            <hr />
            <form action="" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="exmapleInput">Search</label>
                    <input type="text" id="exampleInput" aria-describedby="search" />
                </div>
                <button type="submit" className="btn" >Submit</button>
            </form>
        </>
    )
}

export default Effect
