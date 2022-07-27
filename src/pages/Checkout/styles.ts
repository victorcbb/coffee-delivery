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

    input[type="text"] {
      border: 1px solid ${({ theme }) => theme["gray-300"]};
      border-radius: 4px;

      padding: .75rem;
      margin-bottom: 1rem;

      font-size: .875rem;
      color: ${({ theme }) => theme["gray-700"]};

      box-shadow: 0 0 0px 1000px ${({ theme }) => theme["gray-200"]} inset;
      transition: background-color 5000s ease-in-out 0s;

      
      &:nth-child(1) {
        width: 12.5rem;
      }

      &:nth-child(2) {
        width: 100%;
      }
      
      &:nth-child(3) {
        width: 3.75rem;
      }
    }
    
    fieldset {
      border: none;

      display: flex;
      gap: .75rem;

      input[type="text"]:nth-child(2) {
          max-width: 100%;
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

    button {
      flex: 1;

      background: ${({ theme }) => theme["gray-300"]};
      border-radius: 6px;
      border: none;

      display: flex;
      align-items: center;
      gap: .75rem;

      padding: 1rem;
      
      font-size: .75rem;
      color: ${({ theme }) => theme['gray-700']};
      line-height: 1.6;

      cursor: pointer;
      transition: all 0.2s;

      &:not(.selected):hover {
        filter: brightness(0.9);
      }

      &.selected {
        background-color: ${({ theme }) => theme.purple_light};
        border: 1px solid ${({ theme }) => theme.purple};
      }

      svg {
        color: ${({ theme }) => theme.purple};
      }
    }
  }
`

export const SelectedCoffeeContainer = styled.section`
  width: 28rem;
`
 