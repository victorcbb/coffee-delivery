import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, InfoContainer } from "./styles"

import imgLogo from "../../assets/Logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img 
        src={imgLogo} 
        alt="Como de café roxo com imagem de foguete decolando com o nome Coffee Delivery ao lado" 
      />

      <InfoContainer>
        <div className="location">
          <MapPin weight="fill" size={22} />
          Guanambi, BA
        </div>
        <a className="cart">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </InfoContainer>
    </HeaderContainer>
  )
}