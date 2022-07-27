import { BoxInfoContainer, DetailsContainer, SuccessContainer } from "./styles"
import deliveryImg from "../../assets/delivery.png"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="container">
        <BoxInfoContainer>
          <DetailsContainer>
            <div className="svg">
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </DetailsContainer>

          <DetailsContainer>
            <div className="svg">
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </DetailsContainer>

          <DetailsContainer>
            <div className="svg">
              <CurrencyDollar size={16} />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </DetailsContainer>
        </BoxInfoContainer>

        <img 
          src={deliveryImg} 
          alt="Desenho de entregador levando o pedido em uma moto" 
        />
      </div>
    </SuccessContainer>
  )
}