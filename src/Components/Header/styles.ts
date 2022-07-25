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

    display: flex;
    align-items: center;
    
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.yellow_dark};
    }
  }

`