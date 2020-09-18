import React, {useState, useEffect} from 'react'
import {CardMatch, Titulo, Espaco} from '../Styled/Styled'
import Paper from '@material-ui/core/Paper';
import {baseUrl} from '../Request/Request'
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


export function Matches(props) {
    const [allLikes, setAllLikes] = useState([])
    
    const allMatches = () => {
        axios.get(`${baseUrl}matches`)
        .then(res => {
            setAllLikes(res.data.matches)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        allMatches()
    },([props.match]))

    const reset = () => {
        const body = {
            id: "PatusZf4mHH6UoZfYC8I"
        }
        axios.put(`${baseUrl}clear`, body)
        .then(res => {
            setAllLikes([])
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Espaco>

            <Paper elevation='3'>
                <div>
                    <Titulo>
                        <Typography variant='h4' color='primary'>Matches</Typography>
                    </Titulo>
                
                    <List>
                        {allLikes.map((item) => {
                            return (
                                <div key={item.id}>                            
                                    <ListItem alignItems="flex-start" >
                                        <ListItemAvatar>
                                            <Avatar alt={item.name} src={item.photo}></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText>{item.name}</ListItemText>                                                                  
                                    </ListItem>
                                    <hr />
                                </div>
                            ) 
                        })}            
                    </List>         

                </div>
                <CardMatch>

                    <Button color='primary' variant='contained' onClick={props.openMatches}>Voltar</Button>
                    <Button color='primary' variant='contained' onClick={reset}>Resetar</Button>

                </CardMatch>
            </Paper>
        </Espaco>
    )
}

export default Matches;