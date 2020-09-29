import React from 'react'
import {Button, Typography} from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { CardContainer, CardContent, CardMargin, CardActions, CardArrows } from './styled';

function CardPost(props) {
    return (
        <div>
            {props.posts.map((item) => {
                const {commentsCount, createdAt, id, text, title, userVoteDirection, username, votesCount} = item

                return (
                    <CardMargin key={id}>                        
                        <CardContainer >
                            <Typography variant='h5' align='center'>{username}</      Typography>
                            <CardContent>                                
                                <Typography variant='h6' color='primary'>      {title}</Typography>
                                <Typography variant='body2'>{text}</Typography>
                                <CardActions>
                                    <CardArrows>
                                        <ArrowDropUpIcon fontSize='large'/>
                                        <span>{votesCount}</span>
                                        <ArrowDropDownIcon fontSize='large' />
                                    </CardArrows>
                                    <Typography paragraph>Comentários: {commentsCount}</Typography>  
                                </CardActions>  
                            </CardContent>
                            <CardActions>
                                <Button color="primary" variant='outlined'>Ver mais</Button>
                            </CardActions>                        
                        </CardContainer>
                    </CardMargin>                   
                    
                )
            })}
        </div>
    )
}

export default CardPost;