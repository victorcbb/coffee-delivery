import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Cart } from "./Cart";
import { 
  CheckoutContainer, 
  FormOrderContainer, 
  SelectedCoffeeContainer, 
  Header, 
  Payment
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormOrderContainer>
        <strong>Complete seu pedido</strong>
        
        <Header>
          <MapPinLine size={22} />
          <div>
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </Header>
        <form action="">
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <fieldset>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </fieldset>
        </form>

        <Payment>
          <Header>
            <CurrencyDollar size={22} />
            <div>
              <strong>
                Pagamento
              </strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Header>

            <div className="buttons">
              <button>
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </button>

              <button>
                <Bank size={16} />
                CARTÃO DE DÉBITO
              </button>
              
              <button className="selected">
                <Money size={16} />
                DINHEIRO
              </button>
            </div>
        </Payment>
      </FormOrderContainer>
      <SelectedCoffeeContainer>
        <strong>Cafés selecionados</strong>
        <Cart />
      </SelectedCoffeeContainer>
    </CheckoutContainer>
  )
}