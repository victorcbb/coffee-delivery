import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { IntroContainer, ItemsContainer } from "./styles"
import coffeImg from "../../../../assets/coffee.png"

export function Intro() {
  return (
    <IntroContainer>
      <div className="container">
        <div className="info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver,
            a qualquer hora
          </p>
          <ItemsContainer>
            <div className="wrapper">
              <div className="item">
                <div className="svg">
                  <ShoppingCart size={16} weight="fill" />
                </div>
                Compra simples e segura
              </div>
              <div className="item">
                <div className="svg gray">
                  <Package size={16} weight="fill" />
                </div>
                Embalagem mantém o café intacto
              </div>
            </div>
            <div className="wrapper">
              <div className="item">
                <div className="svg yellow">
                  <Timer size={16} weight="fill" />
                </div>
                Entrega rápida e rastreada
              </div>
              <div className="item">
                <div className="svg purple">
                  <Coffee size={16} weight="fill" />
                </div>
                O café chega fresquinho até você
              </div>
            </div>
          </ItemsContainer>
        </div>
        <img
          src={coffeImg}
          alt="Copo de café com grãos de café inteiros e moído em torno, com um fundo amarelo"
        />
      </div>
    </IntroContainer>
  )
}