import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent} from "@testing-library/react";
import App from "./App";
import Post from './components/Post'

test("Verifica criação de post", async () => {
    const { getByPlaceholderText, getByText } = render(<App />); 

    const input = getByPlaceholderText("Novo post")

    fireEvent.change(input,  {target:  { value: "teste post"}})

    expect(input).toHaveValue("teste post")

    const button = getByText("Adicionar")

    fireEvent.click(button)

    const post = getByText("teste post")

    expect(post).toBeInTheDocument()

    const likeButton = getByText("Curtir")

    fireEvent.click(likeButton)

    expect(likeButton).toHaveTextContent("Descurtir")
})

//test("Verifica curtida", async () => {
//
//    const { getByText } = render(<App />)
//
//    const addPost = getByText(/Adicionar/i)
//
//    fireEvent.click(addPost)
//
//    const curtir = getByText(/Curtir/i)
//
//    fireEvent.click(curtir)
//
//    expect(getByText(/Descurtir/i)).toHaveTextContent("Descurtir")
//})
//
//test("Verifica se post foi apagado", async () => {
//    const { getByText } = render (<App />);
//
//    const addPost = getByText(/Adicionar/i)
//
//    fireEvent.click(addPost)
//
//    const apagar = getByText(/Apagar/i)
//
//    fireEvent.click(apagar)  
//    
//    expect().toHaveTextContent(null)
//
//})