import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BaseUrl } from '../../constants/constants'
import { Container, PostContainer, CommentContainer, InputContainer } from './styled'

function CardPostDetails(props) {
    const pathParams = useParams()
    const [post, setPost] = useState({})
    const token = localStorage.getItem("token")

    const getPostDetails = () => {
        axios.get(`${BaseUrl}posts/${pathParams.id}`, {
            headers: {
                Authorization: token
            }
        })
        .then(res => {
            setPost(res.data.post)
        })
        .catch(err => {console.log(err)})
    }

    useEffect(() => {
        getPostDetails()
    }, ([]))

    const {comments, commentsCount, createdAt, id, text, title, userVoteDirection, username, votesCount} = post

    return (
        <Container>
            <PostContainer>
                <h2>{username}</h2>
                <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <CommentContainer>
                        <h3>Comentários: {commentsCount}</h3>
                        <div>
                            <div>
                            {(comments !== undefined) &&
                             comments.map((comentario) => 
                                <div key={comentario.id}>
                                    <span><strong>{comentario.username}: </strong></span>
                                    <span>{comentario.text}</span>
                                    <hr />
                                </div>
                             )}
                            </div>
                        </div>

                        <InputContainer>
                            <input placeholder="Nome de usuário"/>    
                            <textarea rows="5" placeholder="Comentário"/>
                            <button>Comentar</button>
                        </InputContainer>
                        
                    </CommentContainer>
                </div>
            </PostContainer>
        </Container>
    )
}

export default CardPostDetails;