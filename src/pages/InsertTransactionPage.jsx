import styled from "styled-components"

export default function InsertTransactionsPage() {

  


  return (
    <Entrada>
      <h1>Nova Entrada</h1>
      <form>
        <input placeholder="Valor" type="text"/>
        <input placeholder="Descrição" type="text" />
        <button>Salvar entrada</button>
      </form>
    </Entrada>
  )
}

const Entrada = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
