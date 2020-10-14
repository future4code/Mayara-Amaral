import React, {useState} from 'react'
import axios from 'axios'
import { BaseUrl } from '../../constants/constants';
import { Button, TextField, Typography } from '@material-ui/core';
import useInput from '../../hooks/useInput';
import { useHistory } from 'react-router-dom';
import { CreatePostContainer, InputPostContainer } from './styled';

function CreatePost() {
    const history = useHistory()
    const [texto, setTexto] = useInput('')
    const [titulo, setTitulo] = useInput('')
    const token = localStorage.getItem("token")
    
    const newPost = () => {

        const body = {
            text: texto,
            title: titulo
        }
    
        axios.post(`${BaseUrl}posts`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(res => {
            console.log(res)
            history.push('/')
        })
        .catch(err => console.log(err))

    }

    return (
        <CreatePostContainer>
            <InputPostContainer>
                <Typography variant='h6'>Crie um post</Typography>
                <TextField
                    variant='outlined'
                    label='Titulo'
                    color='primary' 
                    value={titulo} 
                    onChange={setTitulo}
                />
                <TextField
                    variant='outlined'
                    label='Texto'
                    color='primary'  
                    value={texto} 
                    onChange={setTexto}
                />
                <Button variant='contained' color='primary' onClick={newPost}>Criar post</Button>
            </InputPostContainer>            
        </CreatePostContainer>
    )
}

export default CreatePost;