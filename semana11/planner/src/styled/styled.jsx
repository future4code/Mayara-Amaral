import styled, {keyframes} from 'styled-components'

export const PlannerWeek = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1%;
    margin: 3%;
    border: 2px solid #D0B8AC;
`

export const PlannerDay = styled.h3 `
    flex-wrap: wrap;
    width: 100px;
    text-align: center;
    background-color: #FBFEFB;
    border-radius: 20px;
    :hover {
        background-color: #D0B8AC;
    } 
`

export const Input = styled.input `
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-bottom:  2px solid #D0B8AC;
`
export const Select = styled.select `
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-bottom: 2px solid #D0B8AC;
    margin: 0px 5px;
`

export const Menu = styled.div `
    display: flex;
    justify-content: center;
    padding: 2%;
`

export const Home = styled.div `
    background-color: #FBFEFB;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button `
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    margin: 5px;
    background-color: #F3D8C7;
    :hover {
        background-color: #FBFEFB;
    }
`

export const Cabecalho = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F3D8C7;
    width: 100vw;
    height: 15vh;
`

export const Rodape = styled.div `
    background-color: #F3D8C7;
    position: absolute;
    bottom: 0px;
    width: 100vw;
    height: 10vh;
    text-align: center;
`

const animacao = keyframes `

    0% {
        transform: scale(1,1);
    }

    25% {
        transform: scale(1.2,1.2);
    }

    50% {
        transform: scale(1.5,1.5);
    }

    75% {
        transform: scale(1.2,1.2);
    }

    100% {
        transform: scale(1,1);
    }
`

export const Imagem = styled.img `
    width: 100px;
    animation: ${animacao} 2s linear infinite;
`

export const Logo = styled.img `
    overflow: hidden;
    width: 200px;
    
`