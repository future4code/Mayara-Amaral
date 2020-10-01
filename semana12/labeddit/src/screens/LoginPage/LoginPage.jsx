import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { BaseUrl } from '../../constants/constants';
import useInput from '../../hooks/useInput';
import { InputContainer, Content, ButtonContainer } from './styled';
import { Button, TextField } from '@material-ui/core';

export function LoginPage() {
    const history = useHistory()

    const [emailValue, setEmail] = useInput()
    const [passwordValue, setPassword] = useInput()

    const fazerLogin = () => {
        const body =  {
            email: emailValue,
            password: passwordValue
        }

        axios.post(`${BaseUrl}login`, body)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            history.push("/")
        })
        .catch(err => console.log(err))
    }

    const fazerCadastro = () => {
        history.push("/Cadastro")
    }

    return (
     
    <InputContainer>
        <Content>
            <TextField 
                margin='dense' 
                variant='outlined' 
                label={'E-mail'} 
                type="email" 
                value={emailValue} 
                onChange={setEmail} 
            />
            <TextField 
                margin='dense' 
                variant='outlined' 
                label={'Senha'} 
                type="password" 
                value={passwordValue} 
                onChange={setPassword} 
            />
            <ButtonContainer>
                <Button variant='contained' color='primary' size='large' onClick={fazerLogin}>Fazer login</Button>
            </ButtonContainer>
            <ButtonContainer>
                <Button variant='contained' color='inherit' size='large' onClick={fazerCadastro}>Ou faça seu cadastro!</Button>
            </ButtonContainer>
            
        </Content>        
    </InputContainer>
    )
}

export default LoginPage;