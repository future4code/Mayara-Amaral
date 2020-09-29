import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

export function LoginPage() {
    const history = useHistory()
    const [form, setForm] = useState({ email: '', password: ''})

    const handleInputEvent = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    return (
        <div>
            LoginPage
            <input 
                name="email"
                value={form.email}
                onChange={handleInputEvent}
                type="email"
            />
            <input 
                name="password"
                value={form.password}
                onChange={handleInputEvent}
                type="password"
            />     

        </div>
    )
}

export default LoginPage;