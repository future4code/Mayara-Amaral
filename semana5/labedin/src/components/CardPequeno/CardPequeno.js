import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className="smallcard-container">
            <h3>Email:</h3>        
            <p>{props.email}</p>
            <h3>Endereço:</h3>
            <p>{props.endereco}</p>
        </div>
    )
}

export default CardPequeno