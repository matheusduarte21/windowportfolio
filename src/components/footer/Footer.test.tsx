import { render, screen } from "@testing-library/react"
import { Footer } from "./footer"
import userEvent from "@testing-library/user-event"

test('Teste de elementos no Dom', ()=>{
    render(<Footer/>)
    const searchInput = screen.getByPlaceholderText("Pesquisar")
    expect(searchInput).toBeInTheDocument()
})

test('Interagindo com campo de busca', async() =>{
    render(<Footer/>)
    const user = userEvent.setup();
    const searchInput = screen.getByPlaceholderText("Pesquisar");
    await user.type(searchInput, "testando campo");
    await user.click(searchInput);

    expect(searchInput).toHaveValue("testando campo");
})

test('Abra a imagem ao passar o mouse por cima', async () => {
    render(<Footer />);
    
    const user = userEvent.setup();
  
    const edgeIcon = screen.getByAltText('imagemEdge');
    expect(edgeIcon).toBeInTheDocument();
    await user.hover(edgeIcon);

    const vscodeIcon = screen.getByAltText('vscode');
    expect(vscodeIcon).toBeInTheDocument()
    await user.hover(vscodeIcon)

    const teams = screen.getByAltText('teams')
    expect(teams).toBeInTheDocument()
    await user.hover(teams)

    const chrome = screen.getByAltText('chrome')
    expect(chrome).toBeInTheDocument()
    await user.hover(chrome)
  
  
});