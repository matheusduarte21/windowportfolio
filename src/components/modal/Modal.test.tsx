import { render, screen } from '@testing-library/react';
import ModalCustom from './modal';
import userEvent from '@testing-library/user-event';

test('não renderiza o modal quando isOpen é false', () => {

  const { queryByText } = render(
    <ModalCustom isOpen={false} onClose={() => {}}>
      <div>Conteúdo do Modal</div>
    </ModalCustom>
  );
  expect(queryByText('Conteúdo do Modal')).not.toBeInTheDocument();
});

test('renderizar o modal quando isOpen é true', () => {

    const { queryByText } = render(
      <ModalCustom isOpen={true} onClose={() => {}}>
        <div>Conteúdo do Modal</div>
      </ModalCustom>
    );
    expect(queryByText('Conteúdo do Modal')).toBeInTheDocument();
});

test('testando botão de modal', async () =>{

    const onCloseMock = jest.fn();
    render(
        <ModalCustom isOpen={true} onClose={onCloseMock}>
            <div>Conteúdo do Modal</div>
        </ModalCustom>
    );

    const user = userEvent.setup()
    const closeButton = screen.getByText('Fechar')
    await user.click(closeButton)

    expect(onCloseMock).toHaveBeenCalled();
})

test('testando a existência de children no modal', () =>{
    const oncloseMock = jest.fn()

    const {getByTestId} = render(
        <ModalCustom isOpen={true} onClose={oncloseMock}>
            <div>Conteúdo do Modal</div>
        </ModalCustom>
    );
    const contentContainer = getByTestId('modal-custom');
    expect(contentContainer?.querySelectorAll('div').length).toBe(1);
})

test('test de snapshot do modal', ()=>{
    const oncloseMock = jest.fn()

    const {asFragment} = render(
        <ModalCustom isOpen={true} onClose={oncloseMock}>
            <div>Conteúdo do Modal</div>
        </ModalCustom>
    );

    expect(asFragment).toMatchSnapshot()
})

