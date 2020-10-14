import {useState} from 'react'

const useInput = () => {
    const [valor, setValor] = useState("")

    const lidaValor = (e) => {
        setValor(e.target.value)
    }

    return [valor, lidaValor]
}

export default useInput;