import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const Imagem = styled.img `    
    margin: auto 40%; 
`


export function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, ([props.pokemon]))

    const pegaPokemon = pokeName => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(res => {
            setPokemon(res.data)
        }).catch(err => {
            console.log(err)
        })
    } 

    return(
        <Card variant='outlined'>
            <Typography align='center' variant='h5' color='secondary'>{pokemon.name}</Typography>
            <Typography align='center' variant='body1' color='primary'>{pokemon.weight} Kg</Typography>
            {pokemon.types && <Typography align='center' variant='body1' color='primary'>{pokemon.types[0].type.    name}</Typography>}
            {pokemon.sprites && (
              <Imagem src={pokemon.sprites.front_default} alt= {pokemon.name} />
            )}
        </Card>
    );
}