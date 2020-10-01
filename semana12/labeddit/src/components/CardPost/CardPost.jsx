import React from 'react'
import axios from 'axios'
import { BaseUrl } from '../../constants/constants';
import {Button, Typography} from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { CardContainer, CardContent, CardMargin, CardActions, CardArrows } from './styled';
import { useHistory} from 'react-router-dom';
import { goToPostDetailsPage } from '../../routes/GoToPages';

function CardPost(props) {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const voto = (id, voteNumber) => {
        const body = {
            direction: voteNumber
        }
        axios.put(`${BaseUrl}posts/${id}/vote`, body, {
           headers: {
               Authorization: token
           }
        })
        .then(res => console.log(res.data.sucess))
        .catch(err => console.log(err))
    }

    const renderizaPost = () => {
        const postList = props.posts.map((item) => {
            return item
        })        
    
        return postList.map((item) => {
            const {commentsCount, createdAt, id, text, title, userVoteDirection, username, votesCount} = item

            return (
                <CardMargin key={id}>

                        <CardContainer >

                            <Typography variant='h5' align='center'>{username}</Typography>

                            <CardContent>                                
                                <Typography variant='h6' color='primary'>{title}</Typography>
                                <Typography variant='body2'>{text}</Typography>
                                <CardActions>
                                    <CardArrows>
                                        <ArrowDropUpIcon fontSize='large' onClick={() => voto(id, +1)}/>
                                        <span onClick={() => voto(id, 0)}>{votesCount}</span>
                                        <ArrowDropDownIcon fontSize='large' onClick={() => voto(id, -1)} />
                                    </CardArrows>
                                    <Typography paragraph>Comentários: {commentsCount}</Typography>  
                                </CardActions>  
                            </CardContent>

                            <CardActions>
                                <Button color="primary" variant='outlined' onClick={() => goToPostDetailsPage(history,id)}>Ver mais</Button>
                            </CardActions>

                        </CardContainer>

                    </CardMargin>               

            )
        })
        }

    return (
        <div>
           {renderizaPost()}
        </div>
    )
}

export default CardPost;