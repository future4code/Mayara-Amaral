import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, getByPlaceholderText, getByTestId } from "@testing-library/react";
import App from "./App";
import Post from './components/Post'

test("Verifica criação de post", async () => {
    const { getByText } = render(<App />); 

    const addPost = getByText(/Adicionar/i)

    fireEvent.click(addPost)

    expect(getByText(/Curtir/i)).toHaveTextContent("Curtir")
})

test("Verifica curtida", async () => {

    const { getByText } = render(<App />)

    const addPost = getByText(/Adicionar/i)

    fireEvent.click(addPost)

    const curtir = getByText(/Curtir/i)

    fireEvent.click(curtir)

    expect(getByText(/Descurtir/i)).toHaveTextContent("Descurtir")
})

test("Verifica se post foi apagado", async () => {
    const { getByText } = render (<App />);

    const addPost = getByText(/Adicionar/i)

    fireEvent.click(addPost)

    const apagar = getByText(/Apagar/i)

    fireEvent.click(apagar)  
    
    expect().toHaveTextContent(null)

})