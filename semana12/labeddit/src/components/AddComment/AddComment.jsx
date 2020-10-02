import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react'
import useInput from '../../hooks/useInput';
import { CommentContainer } from './styled';
import axios from 'axios'
import { BaseUrl } from '../../constants/constants';

function AddComment(props) {
    const [textoComentario, setTextoComentario] = useInput('')

    const token = localStorage.getItem("token")

    const adicionarComentario = () => {
        const body = {
            text: textoComentario
        }

        axios.post(`${BaseUrl}posts/${props.id}/comment`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }

    return (
        <CommentContainer>
            <Typography variant='h6'>Deixe um comentário:</Typography> 
            <TextField
                variant='outlined'
                color='primary' 
                label="Comentário"
                margin='dense'
                onChange={setTextoComentario}
            />
            <Button color='primary' variant='contained' onClick={adicionarComentario}>Comentar</Button>            
        </CommentContainer>
    )
}

export default AddComment;