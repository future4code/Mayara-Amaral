import React, {useState, useEffect} from 'react';
import {PokeCard} from './components/PokeCard/PokeCard'
import axios from 'axios'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => setPokeList(res.data.results))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokemons()
  }, ([]))

  const ChangePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <Container maxWidth='xs'>
      <Select onChange={ChangePokeName} fullWidth='true' variant='outlined'>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </Select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </Container>
  );
}

export default App;
