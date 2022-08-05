import styled from "styled-components"

export const CartContainer = styled.section`
  width: 100%;

  margin-top: 1rem;
  padding: 2.5rem;

  background: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px 44px;

  ul {
    list-style-type: none;
  
    li {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      padding-bottom: 1.5rem;

      border-bottom: 1px solid ${({ theme }) => theme["gray-300"]};

      strong {
        margin: .5rem .25rem;
        line-height: 130%;
        color: ${({ theme }) => theme["gray-700"]};
      }

      & + li {
        padding-top: 1.5rem;
      }
    }
  }

  > button {
    width: 100%;

    padding: .75rem 0;

    background: ${({ theme }) => theme.yellow};
    border: none;
    border-radius: 6px;

    font-size: .875rem;
    line-height: 160%;
    color: white;

    transition: all .2s;
    cursor: pointer;
    
    &:not(:disabled):hover {
      background: ${({ theme }) => theme.yellow_dark};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  margin: .5rem .25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  .buttonsAmount {
    height: 2rem;
    display: flex;
    align-items: stretch;
    gap: .5rem;

    margin-top: .5rem;

    > button {
      padding: 0 .5rem;

      background: ${({ theme }) => theme["gray-300"]};
      border-radius: 6px;
      border: none;
      
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .25rem;

      color: ${({ theme }) => theme["gray-700"]};
      font-size: .75rem;
      line-height: 1.6;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      svg {
        color: ${({ theme }) => theme.purple};
      }
    }
  }
  
`
export const PricesContainer = styled.div`
  width: 100%;

  margin: 24px 0; 

  display: flex;
  flex-direction: column;
  gap: .75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: .875rem;
      line-height: 130%;
      color: ${({ theme }) => theme["gray-700"]};
    }

    span:last-child {
      font-size: 1rem;
    }

    strong {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${({ theme }) => theme["gray-800"]};
    }
  }
`