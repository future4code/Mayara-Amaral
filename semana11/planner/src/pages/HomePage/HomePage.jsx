import React from 'react'
import { useHistory } from 'react-router-dom';
import { Home, Button, Imagem } from '../../styled/styled';
import { goPlanner } from '../GoToPages/GoToPages';
import Coracao from '../../assets/coracao.svg'

function HomePage() {
    const history = useHistory()

    return (
        <Home>
            <Imagem src={Coracao}></Imagem>
            <h1>Planner</h1>
            <Button onClick={() => goPlanner(history)}>Ir para o planner</Button>
        </Home>
    )
}

export default HomePage;