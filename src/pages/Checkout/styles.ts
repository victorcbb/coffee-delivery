import styled from "styled-components"

export const CheckoutContainer = styled.main`
	width: 70rem;

  margin: 2.5rem auto 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`

export const FormOrderContainer = styled.section`
  width: 40rem;

  > strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    line-height: 1.3rem;
    color: ${({ theme }) => theme["gray-800"]};
  }

  > form {
    background: ${({ theme }) => theme["gray-100"]};
    border-radius: 0 0 6px 6px;

    padding: 0 2.5rem 1.5rem;

    display: grid;
    grid-template-columns: 12.5rem 17.5rem 3.5rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .cep {
      grid-column: span 3;
      max-width: 12.5rem;
    }

    .street {
      grid-column: span 3;
    }

    .complement {
      grid-column: span 2;
    }

    .inputWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      position: relative;

      span {
        color: #ff2222;
        opacity: 0.7;
        font-size: .625rem;
      }
    }

    span.opitional {
      position: absolute;
      right: .75rem;
      top: .75rem;

      font-size: .875rem;
      color: ${({ theme }) => theme["gray-400"]};
    }

    input[type="text"] {
      width: 100%;
      border: 1px solid ${({ theme }) => theme["gray-300"]};
      border-radius: 4px;

      padding: .75rem;

      font-size: .875rem;
      color: ${({ theme }) => theme["gray-700"]};

      box-shadow: 0 0 0px 1000px ${({ theme }) => theme["gray-200"]} inset;
      transition: background-color 5000s ease-in-out 0s;

      &::placeholder {
        color: ${({ theme }) => theme["gray-400"]};
      }
    }
  }
`

export const Header = styled.div`
  margin-top: 1rem;
  padding: 2.5rem 2.5rem 2rem;

  display: flex;
  gap: .5rem;

  background: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px 6px 0 0;
  svg {
    color: ${({ theme }) => theme.yellow_dark};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: .125rem;

    strong {
      font-weight: 400;
      line-height: 1.3;
      color: ${({ theme }) => theme["gray-800"]};
    }
    span {
      font-size: .875rem;
      line-height: 1.3;
      color: ${({ theme }) => theme["gray-700"]};
    }
  }
`

export const Payment = styled.div`
  .buttons {
    background: ${({ theme }) => theme["gray-100"]};
    border-radius: 0 0 6px 6px;
    padding: 0 2.5rem 2.5rem;

    display: flex;
    justify-content: space-between;
    gap: .75rem;

    > div {
      flex: 1;
     
      label {
        display: flex;
        align-items: center;

        flex: 1;

        background: ${({ theme }) => theme["gray-300"]};
        border-radius: 6px;
        border: none;

        display: flex;
        align-items: center;

        padding: 1rem;

        font-size: .75rem;
        color: ${({ theme }) => theme['gray-700']};
        line-height: 1.6;

        cursor: pointer;
        transition: all 0.2s;

        cursor: pointer;
        transition: all 0.2s;

        &:not(.selected):hover {
          filter: brightness(0.9);
        }
      }
      
      svg {
        color: ${({ theme }) => theme.purple};
        margin-right: .75rem;
      }
      
      input[type="radio"] {
        visibility: hidden;
        appearance: none;

        &:checked + label {
          background-color: ${({ theme }) => theme.purple_light};
          border: 1px solid ${({ theme }) => theme.purple};
        }
      }
    }
  }

  > span {
    display: block;
    margin: -1.5rem 2.5rem 0;
    color: #ff2222;
    opacity: 0.7;
    font-size: .875rem;
  }
`

export const SelectedCoffeeContainer = styled.section`
  width: 28rem;
`
 