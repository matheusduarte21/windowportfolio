import { render } from "@testing-library/react"
import { ContentMain } from "./ContentMain"

test('verificando components filhos', ()=>{
    const {container} =  render(<ContentMain/>)
    const contentMain = container.querySelector('.container-main')

    expect(contentMain?.children.length).toBe(4)
})

test('teste de snapshot', ()=>{
    const {asFragment} = render(<ContentMain/>)
    expect(asFragment).toMatchSnapshot()
})