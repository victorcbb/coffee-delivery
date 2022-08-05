import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, InfoContainer } from "./styles"

import imgLogo from "../../assets/Logo.svg"
import { useCoffees } from '../../hook/useCoffees'

export function Header() {
  const { cartQuantity } = useCoffees()
  
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img 
            src={imgLogo} 
            alt="Logo de café roxo com imagem de foguete decolando com o nome Coffee Delivery ao lado" 
          />
        </NavLink>

        <InfoContainer>
          <div className="location">
            <MapPin weight="fill" size={22} />
            Guanambi, BA
          </div>
          <NavLink to="/checkout" className="cart">
            <ShoppingCart size={22} weight="fill" />
            {
              cartQuantity >= 1 &&
              <span className="amountOfOrders">{cartQuantity}</span>
            }
          </NavLink>
        </InfoContainer>
      </div>
    </HeaderContainer>
  )
}