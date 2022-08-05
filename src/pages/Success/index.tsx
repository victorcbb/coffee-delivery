import { BoxInfoContainer, DetailsContainer, SuccessContainer } from "./styles"
import deliveryImg from "../../assets/delivery.png"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData, paymentMethods } from "../Checkout"
import { useEffect } from "react"

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if(!state) {
      navigate("/")
    }
  }, [])

  if(!state) return <></>

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
                Entrega em <strong>{state.street}, {state.number}</strong>
              </span>
              <span>{state.district} - {state.city}, {state.state}</span>
            </div>
          </DetailsContainer>

          <DetailsContainer>
            <div className="svg">
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <span>
                Previsão de entrega
              </span>
              <strong>20 min - 30 min</strong>
            </div>
          </DetailsContainer>

          <DetailsContainer>
            <div className="svg">
              <CurrencyDollar size={16} />
            </div>
            <div>
              <span>
                Pagamento na entrega
              </span>
              <strong>{paymentMethods[state.paymentMethods].label}</strong>
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