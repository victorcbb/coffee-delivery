import { rgba } from "polished"
import styled from "styled-components"
import imgBackground from '../../../../assets/Background.png'


export const IntroContainer = styled.div`
	width: 100%; 
	height: 34rem;
	background: ${({ theme }) => `url(${imgBackground}) no-repeat center center,
		linear-gradient(
			0deg,
			#FFFFFF 0%,
			${rgba(theme.background, 0.2)} 50%,
			${theme.background} 100%
			
		)`};
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