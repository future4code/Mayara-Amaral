import styled from 'styled-components'

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center; 
    width: 80vw;
    max-width: 480px;
    border: 1px solid black;
    padding: 2%;
`

export const CardContent = styled.div `
    flex-grow: 1;
    border-top: 2px dotted black;     
`

export const CardMargin = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const CardActions = styled.div `
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    align-items: baseline;
`

export const CardArrows = styled.div `
    font-weight: bold;  
`