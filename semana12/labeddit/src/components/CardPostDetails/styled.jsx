import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`

export const PostContainer = styled.div `
    width: 80vw;
    max-width: 480px;
    text-align: justify;
    border: 1px solid black;
    padding: 10px;
    padding-top: 0px;
`

export const CommentContainer = styled.div `
    padding: 5px;
    border-radius: 5px;
    `

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-between;    
    flex-grow: 1;
`