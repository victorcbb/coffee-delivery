import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Coffee } from "../pages/Home/components/CoffeeCard"
import { produce } from "immer"

export interface CartItems extends Coffee {
  quantity: number
}

interface BuyContextType {
  cartItems: CartItems[]
  addCoffeeToCart: (coffee: CartItems) => void
  changeCartItemQuantity: (
    cartItemId:number, 
    type: "increase" | "decrease"
  ) => void
  RemoveCoffeeCard: (cartItemId:number) => void
  cartItemsTotal: number
  cartQuantity: number
  cleanCart: () => void
}

const BuyContext = createContext<BuyContextType>({} as BuyContextType)

interface BuyContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export function BuyContextProvider({ children }: BuyContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee:CartItems) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId:number, 
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if(coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity = 
          type === "increase" ? item.quantity + 1 : item.quantity - 1
      }

    })
    setCartItems(newCart)
  }

  function RemoveCoffeeCard(cartItemId: number) {
    const removedCoffeeOnList = cartItems.filter(
      cartItem => cartItem.id !== cartItemId
    )

    setCartItems(removedCoffeeOnList)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <BuyContext.Provider value={{ 
      cartItems, 
      addCoffeeToCart, 
      changeCartItemQuantity, 
      RemoveCoffeeCard,
      cartItemsTotal,
      cartQuantity,
      cleanCart
    }}>
      {children}
    </BuyContext.Provider>
  )
}

export function useCoffees():BuyContextType {
  const context = useContext(BuyContext)

  return context
}
