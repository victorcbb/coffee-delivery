import { Trash } from "phosphor-react"

import { Amount } from "../../../Components/Amount"
import { coffees } from "../../../data/coffees"
import { useCoffees } from "../../../hook/useCoffees"
import { formatMoney } from "../../../utils/formatMonay"
import { CartContainer, ItemContainer, PricesContainer } from "./styles"

export function Cart() {
  const { 
    cartItems, 
    changeCartItemQuantity, 
    RemoveCoffeeCard, 
    cartItemsTotal,
    cartQuantity
  } = useCoffees()

  function handleIncrease(valueId: number) {
    changeCartItemQuantity(valueId, "increase")
  }

  function handledecrease(valueId: number) {
    changeCartItemQuantity(valueId, "decrease")
  }

  function handleRemoveCoffeeCard(valueId: number) {
    RemoveCoffeeCard(valueId)
  }

  const delivery: number = 3.50

  const formatedTotalOfItems = formatMoney(cartItemsTotal)
  const formatedDelivery = formatMoney(delivery)
  const formatedTotal = formatMoney(cartItemsTotal + delivery)

  return (
    <CartContainer>
      <ul>

        {
          cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <ItemContainer>
                <img src={`/coffees/${cartItem.photo}`} alt={cartItem.name} />
                <div>
                  {cartItem.name}
                  <div className="buttonsAmount">
                    <Amount 
                      quantity={cartItem.quantity}
                      onIncrease={() => handleIncrease(cartItem.id)}
                      onDecrease={() => handledecrease(cartItem.id)}
                    />
                    <button onClick={() => handleRemoveCoffeeCard(cartItem.id)}>
                      <Trash size={16} />
                      REMOVER
                    </button>
                  </div>
                </div>
              </ItemContainer>
              <strong>
                R$ {formatMoney(cartItem.price * cartItem.quantity)}
              </strong>
            </li>
          ))
        }

      
      </ul>

      <PricesContainer>
        <div className="priceTotal">
          <span>
            Total de itens
          </span>
          <span>
            R$ {formatedTotalOfItems}
          </span>
        </div>
        <div className="delivery">
          <span>
            Entrega
          </span>
          <span>
            R$ {formatedDelivery}
          </span>
        </div>
        <div className="total">
          <strong>Total</strong>
          <strong>R$ {formatedTotal}</strong>
        </div>
      </PricesContainer>

      <button 
        type="submit" 
        disabled={cartQuantity <= 0}
        form="payment"
      >
        CONFIRMAR PEDIDO
      </button>
    </CartContainer>
  )
}