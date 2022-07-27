import { Trash } from "phosphor-react"

import { Amount } from "../../../Components/Amount"
import { CartContainer, ItemContainer, PricesContainer } from "./styles"
import coffeTraditional from "../../../assets/traditional.png"

export function Cart() {
  return (
    <CartContainer>
      <ul>

        <li>
          <ItemContainer>
            <img src={coffeTraditional} alt="" />
            <div>
              Expresso Tradicional
              <div className="buttonsAmount">
                <Amount />
                <button>
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </div>
          </ItemContainer>
          <strong>R$ 9,90</strong>
        </li>

        <li>
          <ItemContainer>
            <img src={coffeTraditional} alt="" />
            <div>
              Expresso Tradicional
              <div className="buttonsAmount">
                <Amount />
                <button>
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </div>
          </ItemContainer>
          <strong>R$ 9,90</strong>
        </li>
      
      </ul>

      <PricesContainer>
        <div className="priceTotal">
          <span>
            Total de itens
          </span>
          <span>
            R$ 29,70
          </span>
        </div>
        <div className="delivery">
          <span>
            Entrega
          </span>
          <span>
            R$ 3,50
          </span>
        </div>
        <div className="total">
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>
      </PricesContainer>

      <button type="submit">CONFIRMAR PEDIDO</button>
    </CartContainer>
  )
}