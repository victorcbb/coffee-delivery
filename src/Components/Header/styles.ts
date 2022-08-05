import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10rem;

  > div {
    width: 100%;
    max-width: 70rem;

    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
    width: fit-content;
    height: fit-content;
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