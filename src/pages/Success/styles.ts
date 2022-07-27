import styled from "styled-components"

export const SuccessContainer = styled.main`
	width: 70rem; 
	height: calc(100vh - 6.5rem);

  margin: 2.5rem auto 0;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme.yellow_dark};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme["gray-800"]};

    margin-top: .25rem;
  }
  
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const BoxInfoContainer = styled.section`
  width: 32.875rem;

  background: 
    linear-gradient(#FAFAFA, #FAFAFA) padding-box,
    linear-gradient(135deg, rgba(219,172,44,1), rgba(128,71,248,1)) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  padding: 2.5rem;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  .svg {
    display: flex;
    align-items: center;

    padding: 0.5rem;

    border-radius: 9999px;
    background: ${({ theme }) => theme.purple};
    color: white;
  }

  &:nth-child(2) .svg {
    background: ${({ theme }) => theme.yellow};
  }

  &:nth-child(3) .svg {
    background: ${({ theme }) => theme.yellow_dark};
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`
