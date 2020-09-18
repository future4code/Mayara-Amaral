import React, {useState, useEffect} from 'react'
import {CardMatch, Texto, Espaco} from '../Styled/Styled'
import {baseUrl} from '../Request/Request'
import styled from 'styled-components'
import axios from 'axios'
import {Photo} from '../Styled/Styled'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';



export function Person(props) {

    return (
        <Espaco>         
            <Paper elevation='3'>
                <CardMatch>
                    <Typography variant='h4' display='inline'>{props.person.name}</Typography>
                    <Typography variant='h6' display='inline' color='secondary'>{props.person.age} anos</Typography>
                </CardMatch>
                
                <Photo src={props.person.photo} />
                <Texto>{props.person.bio}</Texto>
            </Paper>

        </Espaco>
    )
}

export default Person;