import styled from "styled-components"



export default function TransactionItem() {
    return (
        <Transaction>
            <div>
                <span>30/11</span>
                <strong>Almoço mãe</strong>
            </div>
            <Value color={"negativo"}>120,00</Value>
        </Transaction>
    )
}

const Transaction = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: #000000;
    margin-right: 10px;
    div span {
    color: #c6c6c6;
    margin-right: 10px;
    }
`