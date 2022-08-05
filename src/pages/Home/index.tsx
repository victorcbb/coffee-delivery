import { coffees } from "../../data/coffees"
import { CoffeeCard } from "./components/CoffeeCard"
import { Intro } from "./components/Intro"
import {
  CoffeesContainer,
  HomeContainer,
} from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <Intro />

      <CoffeesContainer>
        <strong>Nossos cafés</strong>
        <div className="coffeeWrapper">
          {
            coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
              ))
          }
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
