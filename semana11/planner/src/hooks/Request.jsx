import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../assets/ConstRequest/ConstRequest'

export function useTasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get(`${BaseUrl}`)
        .then(res => {
            console.log(res.data)
            setTasks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, ([]))
    
    return tasks
}

export function useInput() {
    const [input, setInput] = useState('')

    const lidaValor = (e) => {
        setInput(e.target.value)        
    }

    return [input, lidaValor]
}