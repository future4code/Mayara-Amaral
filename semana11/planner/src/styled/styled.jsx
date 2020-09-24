import styled from 'styled-components'
import React from 'react'

export const PlannerWeek = styled.div `
    display: flex;
    justify-content: space-around;
    padding: 1%;
    margin: 2%;
    border: 1px solid black;
`

export const PlannerDay = styled.div `
    :hover {
        color: red;
    } 
`

export const Menu = styled.div `
    display: flex;
    justify-content: center;
    padding: 2%;
`

export const Home = styled.div `
    background-color: palegoldenrod;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`