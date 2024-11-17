import { render, screen,act  } from "@testing-library/react"
import { NavBarHours } from "./navBarHours"

test('fazendo verificação de horas', ()=>{
    render(<NavBarHours/>)

  const hora = screen.getByText(/\d{1,2}:\d{2}:\d{2}/i);
  expect(hora).toBeInTheDocument();

  const dia = screen.getByText(/domingo|segunda-feira|terça-feira|quarta-feira|quinta-feira|sexta-feira|sábado/i);
  expect(dia).toBeInTheDocument();

})

test('Atualiza a hora dinamicamente a cada segundo', () => {
    jest.useFakeTimers();
  
    render(<NavBarHours />);
  
    const horaInicial = screen.getByText(/\d{1,2}:\d{2}:\d{2}/i);
    expect(horaInicial).toBeInTheDocument();
  
    const horaInicialTexto = horaInicial.textContent;
  
    act(() => {
      jest.advanceTimersByTime(1000);
    });
  
    const horaAtualizada = screen.getByText(/\d{1,2}:\d{2}:\d{2}/i);
    expect(horaAtualizada).toBeInTheDocument();
  
    expect(horaInicialTexto).not.toBe(horaAtualizada.textContent);
  
    jest.useRealTimers();
  });