import styled from "styled-components"

export const AmountContainer = styled.div`
  width: fit-content;

  background: ${({ theme }) => theme["gray-300"]};
  border-radius: 6px;
  padding: 0 .5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;

  button {
    color: ${({ theme }) => theme.purple};
    border: none;
    background: transparent;

    cursor: pointer;
  }

  span {
    width: 1.25rem;
    text-align: center;
    line-height: 1.3;
  }
`