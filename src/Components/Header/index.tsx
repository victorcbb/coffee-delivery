import { HeaderContainer, InfoContainer } from "./styles";

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
          
        </div>
      </InfoContainer>
    </HeaderContainer>
  )
}