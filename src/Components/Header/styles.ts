import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: .75rem;
  align-items: center;
  
  .location {
    background: ${({ theme }) => theme.purple_light};
    border-radius: 6px;
    padding: .5rem;

    display: flex;
    align-items: center;
    gap: .25rem;

    color: ${({ theme }) => theme.purple_dark};
    font-size: .875rem;
    line-height: 130%;

    svg {
      color: ${({ theme }) => theme.purple};
    }

  }

  .cart {
    padding: .5rem;
    background: ${({ theme }) => theme.yellow_light};
    border-radius: 6px;

    position: relative;

    display: flex;
    align-items: center;
    
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.yellow_dark};
    }

    .amountOfOrders {
      width: 1.25rem;
      height: 1.25rem;

      position: absolute;
      right: -.5rem;
      top: -.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: .75rem;
      font-weight: bold;
      line-height: 1;
      color: white;

      background: ${({ theme }) => theme.yellow_dark};
      border-radius: 9999px;
    }
  }

`