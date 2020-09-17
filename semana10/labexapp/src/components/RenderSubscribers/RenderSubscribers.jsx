import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import BaseUrl from '../../const-requests/const-requests'


export function RenderSubscribers(props) {
    console.log(props)
    const token = window.localStorage.getItem("token")

    const decideCandidate = (id, foiAprovado) => {
        const body = {
            approve: foiAprovado
        }

        Axios.put(`${BaseUrl}/trips/${props.renderTrip.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const aceitar = (id, aprovado) => {       
        decideCandidate(id, true)
    }

    const recusar = (id, recusado) => {
        decideCandidate(id, false)
    }

    return (
        <div>

            <div>
                <h2>{props.renderTrip.name}</h2>
                <h3>{props.renderTrip.planet}</h3>
                <p>Duração: {props.renderTrip.durationInDays} dias</p>
                <p>Descrição da viagem: {props.renderTrip.description}</p>
                <h4>Data: {props.renderTrip.date}</h4>
                <h1>Inscritos: </h1>
            </div>

            {props.renderTrip.candidates.map((candidato) => 
            <div key={candidato.id}>
                <p>{candidato.name} <span>{candidato.age} anos</span></p>
                <p>{candidato.applicationText}</p>
                <p>País de origem: {candidato.country}</p>
                <button onClick={() => aceitar(candidato.id)}>Aceitar</button>
                <button onClick={() => recusar(candidato.id)}>Recusar</button>                
                <hr />           

            </div>)}            

        </div>
    )
}