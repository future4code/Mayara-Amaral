import {useState, useEffect} from 'react'
import axios from 'axios'
import BaseUrl from '../const-requests/const-requests'


//Pega todas as viagens disponíveis
export function useTrips() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(`${BaseUrl}/trips`)
        .then( res => {
           setTrips(res.data.trips)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    return trips
}

//lida com input controlado
export function useInputValue() {
    const [valor, atualizaValor] = useState("")

    const lidaValor = (e) => {
        atualizaValor(e.target.value)        
    }

    return [valor, lidaValor]
}

//isso daqui não é um hook, é uma requisição

export function usePostTrip(nome, planeta, data, descricao, duracao) {
    const body = {
        name: nome,
        planet: planeta,
        date: data,
        description: descricao,
        durationInDays: duracao
    }

    axios.post(`${BaseUrl}trips`, body, {
        headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'
        }
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export function Apply(nome, idade, porque, profissao, pais, viagem){
    const body = {
        name: nome,
        age: idade,
        applicationText: porque,
        profession: profissao,
        country: pais
    }

    axios.post(`${BaseUrl}trips/${viagem}/apply`, body)
    .then(res => {
        console.log(res)
    }).catch(err => {
        alert('Preencha todos os campos')
    })
}