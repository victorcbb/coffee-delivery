import styled from "styled-components";

export const CoffeeContainer = styled.div`
    width: 16rem;

    text-align: center;

    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme["gray-100"]};
    border-radius: 6px 36px 6px 36px;

    img {
      margin: -1.25rem 0 .75rem;
    }

		.tags {
			display: flex;
			justify-content: center;
			gap: .25rem;

			> span {
				background: ${({ theme }) => theme.yellow_light};
				border-radius: 9999px;
	
				padding: .25rem .5rem;
				margin-bottom: 1rem;
	
				color: ${({ theme }) => theme.yellow_dark};
				font-size: .625rem;
				font-weight: bold;
				line-height: 1.3;
			}
		}


    > strong {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.25rem;
      line-height: 130%;

      margin-bottom: .5rem;
    }

    > p {
      font-size: .875rem;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-400']};
      
      margin-bottom: 2rem;
    }
`

export const BuyContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	margin-bottom: 1.25rem;

	.price {
		color: ${({ theme }) => theme['gray-700']};

		span {
			font-size: .875rem;
			line-height: 130%;
		}

		strong {
			font-family: 'Baloo 2', cursive;
			font-weight: 800;
			font-size: 1.5rem;
			line-height: 130%;
		}
	}

	.action {
		height: 2.375rem;
		display: flex;
		align-items: stretch;
		justify-content: center;
		gap: .5rem;

		> button {
			padding: .5rem;

			background: ${({ theme }) => theme.purple_dark};
			border: none;
			border-radius: 6px;

			color: white;

			display: flex;
			align-items: center;
      justify-content: center;

			cursor: pointer;
			transition: all 0.2s;
		}

		> button:hover {
			background: ${({ theme }) => theme.purple};
		}
	}
` 
