import styled, { ThemeConsumer } from "styled-components";

export const HomeContainer = styled.main`
	width: 100%; 
	height: calc(100vh - 6.5rem);

	overflow-y: auto;
`

export const CoffeesContainer = styled.section`
	width: 70rem;
	margin: 2rem auto 5rem;

	> strong {
		font-family: 'Baloo 2', cursive;
		font-weight: 800;
		font-size: 2rem;
		line-height: 130%;
	}
	
	.coffeeWrapper {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;

		margin-top: 2rem;
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
		display: flex;
		align-items: center;
		justify-content: center;
		gap: .5rem;

		.amount {
			height: 2.375rem;

			background: ${({ theme }) => theme["gray-200"]};
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
		}

		> button {
			padding: .5rem;
			background: ${({ theme }) => theme.purple_dark};
			border: none;
			border-radius: 6px;

			color: white;

			display: flex;
			align-items: center;
      justify-content: center;
		}
	}
` 
