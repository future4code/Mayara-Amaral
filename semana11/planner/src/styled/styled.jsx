import styled from 'styled-components'

export const PlannerWeek = styled.div `
    display: flex;
    justify-content: space-around;
    padding: 1%;
    margin: 2%;
    border: 2px solid #D0B8AC;
`

export const PlannerDay = styled.h3 `
    width: 100px;
    text-align: center;
    background-color: #FBFEFB;
    border-radius: 20px;
    :hover {
        background-color: #D0B8AC;
    } 
`

export const Input = styled.input `
    border: none;
    border-bottom: 2px solid #D0B8AC;
`
export const Select = styled.select `
    border: none;
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
`