import React, {useState, useEffect} from 'react'
import {CardMatch} from '../Styled/Styled'
import {baseUrl} from '../Request/Request'
import axios from 'axios'
import Person from '../Person/Person'
import Matches from '../Matches/Matches'
import IconButton from '@material-ui/core/IconButton'
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import Typography from '@material-ui/core/Typography';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import ThumbDownAltSharpIcon from '@material-ui/icons/ThumbDownAltSharp';
import Container from '@material-ui/core/Container';

export function InitialPage() {
    const [person, setPerson] = useState([])
    const [matches, setMatches] = useState(false)    

    //Faz requisição da pessoa para renderizar na tela
    const getPerson = () => {
        axios.get(`${baseUrl}person`)
        .then(res => {
           setPerson(res.data.profile)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPerson()
    },([])) 

    //Dar like na pessoa

    const like = () => {
        const body = {
            id: person.id,
            choice: true
        }

        axios.post(`${baseUrl}choose-person`, body)
        .then(res => {
            if(res.data.isMatch){
                alert('Deu match')
            }
            getPerson()            
        }).catch(err => {
            console.log(err)
        })
    }

    const noLike = () => {
       getPerson()
    }

    //renderiza todos os matches
    const openMatches = () => {
        setMatches(!matches)
    }

    return (
        <Container maxWidth='xs'>

            {matches ?
                <Matches match={matches} openMatches={openMatches}/> 
                : 
                <div>
                    <CardMatch>
                        <Typography display='inline' variant='h3'>AstroMatch</Typography>
                        <IconButton onClick={openMatches} back={openMatches}><PeopleAltSharpIcon color='primary'/></IconButton>
                    </CardMatch>
                    <div>
                         <Person person={person} />
                    </div>                 
                    <CardMatch>
                        <IconButton onClick={noLike}><ThumbDownAltSharpIcon color='secondary'/></IconButton>
                        <IconButton onClick={like}><FavoriteSharpIcon color='primary'/></IconButton>
                    </CardMatch>
                </div> 
            }      

        </Container>
    )
}

export default InitialPage;