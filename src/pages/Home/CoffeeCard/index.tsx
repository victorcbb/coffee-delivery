import { BuyContainer, CoffeeContainer } from "./styles"
import coffeTraditional from "../../../assets/traditional.png"
import { ShoppingCart } from "phosphor-react"
import { Amount } from "../../../Components/Amount"

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img src={coffeTraditional} alt="Ilustração de café vendido" />
            <div className="tags">
              <span>Tradicional</span>
              {/* <span>Gelado</span> */}
            </div>
            <strong>Expresso tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <BuyContainer>
              <div className="price">
                <span>R$&nbsp;</span>
                <strong>9,90</strong>
              </div>
              <div className="action">
                <Amount />
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </BuyContainer>
    </CoffeeContainer>
  )
}