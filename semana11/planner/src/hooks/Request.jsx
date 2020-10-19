import React, { useState } from 'react'

export function useInput() {
    const [input, setInput] = useState('')

    const lidaValor = (e) => {
        setInput(e.target.value)        
    }
    
    return [input, lidaValor]
}