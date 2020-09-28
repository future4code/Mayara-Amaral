import {useState, useEffect} from 'react'
import axios from 'axios'
import BaseUrl from '../const-requests/const-requests'

export function useTrips() {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(`${BaseUrl}trips`)
        .then( res => {
           setTrips(res.data.trips)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    return trips
}

export function useInputValue() {
    const [valor, atualizaValor] = useState("")

    const lidaValor = (e) => {
        atualizaValor(e.target.value)
    }

    return [valor, lidaValor]
}

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