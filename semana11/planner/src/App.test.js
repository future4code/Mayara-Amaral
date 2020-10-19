import React from 'react';
import { findByPlaceholderText, findByText, fireEvent, getByPlaceholderText, queryByText, render } from '@testing-library/react';
import App from './App';
import PlannerPage from './pages/PlannerPage/PlannerPage';

test("Abrir página do planner quando o botão ir para o planner for clicado", () => {
  const { getByText } = render(<App />);

  const button = getByText("Ir para o planner");

  fireEvent.click(button);

  render(<PlannerPage />)

  expect(button).not.toBeInTheDocument()

})

test("Verifica se o input de adicionar tarefa está funcionando", () => {
  const { getByPlaceholderText } = render(<PlannerPage />)

  const input = getByPlaceholderText("Digite a tarefa")

  fireEvent.change(input, { target: { value: "nova tarefa" } })

  expect(input).toHaveValue("nova tarefa")
})
