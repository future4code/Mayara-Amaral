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