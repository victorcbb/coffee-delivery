import styled, { ThemeConsumer } from "styled-components";
import imgBackground from '../../assets/Background.png'

export const HomeContainer = styled.main`
	width: 100%; 
	height: calc(100vh - 6.5rem);

	overflow-y: auto;
`

export const IntroContainer = styled.div`
	width: 100%; 
	height: 34rem;
	background: url(${imgBackground}) no-repeat center center;
	background-size: cover;

	display: flex;
	align-items: center;
	justify-content: center;

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3.5rem;
	}
	
	.info {
		width: 36.75rem;
		
		h1 {
			font-family: 'Baloo 2', cursive;
			font-size: 3rem;
			font-weight: 800;
			line-height: 1.3;
			color: ${({ theme }) => theme["gray-900"]};
			
			margin-bottom: 1rem;
		}

		p {
			font-stretch: 100;
			font-size: 1.25rem;
			line-height: 130%;
		}
	}
	

`

export const ItemsContainer = styled.div`
	width: 100%;

	margin-top: 4.125rem;

	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	.wrapper {
		display: flex;
		gap: 2.5rem;
	}

	.item {
		display: flex;
		align-items: center;
		gap: .75rem;

		line-height: 130%;
		color: ${({ theme }) => theme["gray-700"]};

		&:first-child {
			width: 14.4375rem;
		}

		&:last-child {
			width: 18.375rem;
		}

		.svg {
			width: fit-content;
			background: ${({ theme }) => theme.yellow_dark};
			padding: .5rem;
			border-radius: 50%;
	
			display: flex;
			align-items: center;
			justify-content: center;
	
			svg {
				color: white;
			}
		}
		
		.gray {
			background-color: ${({ theme }) => theme["gray-700"]};
		}
		
		.yellow {
			background-color: ${({ theme }) => theme.yellow};
		}
		
		.purple {
			background-color: ${({ theme }) => theme.purple};
		}
	}
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
