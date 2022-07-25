import { BuyContainer, CoffeeContainer } from "./styles"
import coffeTraditional from "../../../assets/traditional.png"
import { Minus, Plus, ShoppingCart } from "phosphor-react"

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img src={coffeTraditional} alt="Ilustração de café vendido" />
            <span>Tradicional</span>
            <strong>Expresso tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <BuyContainer>
              <div className="price">
                <span>R$&nbsp;</span>
                <strong>9,90</strong>
              </div>
              <div className="action">
                <div className="amount">
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </div>
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </BuyContainer>
    </CoffeeContainer>
  )
}