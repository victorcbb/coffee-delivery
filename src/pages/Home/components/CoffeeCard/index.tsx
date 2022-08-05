import { ShoppingCart } from "phosphor-react"
import { useState } from "react"

import { BuyContainer, CoffeeContainer } from "./styles"
import { Amount } from "../../../../Components/Amount"
import { useCoffees } from "../../../../hook/useCoffees"
import { formatMoney } from "../../../../utils/formatMonay"

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCoffees()

  function handleIncrease() {
      setQuantity(prevState => prevState + 1)
  }

  function handleDecrease() {
      setQuantity(prevState => prevState - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }

    addCoffeeToCart(coffeeToAdd)
  }

  const formatedPrice = formatMoney(coffee.price)

  return (
    <CoffeeContainer>
            <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />
            <div className="tags">
              {
                coffee.tags.map((tag) => (
                  <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))
              }
            </div>
            <strong>{coffee.name}</strong>
            <p>{coffee.description}</p>
            <BuyContainer>
              <div className="price">
                <span>R$&nbsp;</span>
                <strong>{formatedPrice}</strong>
              </div>
              <div className="action">
                <Amount 
                  onIncrease={handleIncrease} 
                  onDecrease={handleDecrease}
                  quantity={quantity}
                  />
                <button onClick={handleAddToCart} >
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </BuyContainer>
    </CoffeeContainer>
  )
}