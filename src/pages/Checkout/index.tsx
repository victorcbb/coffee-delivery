import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import * as zod from "zod"
import { 
  Bank, 
  CreditCard, 
  CurrencyDollar, 
  MapPinLine, 
  Money 
} from "phosphor-react"

import { Cart } from "./Cart"
import {
  CheckoutContainer,
  FormOrderContainer,
  SelectedCoffeeContainer,
  Header,
  Payment
} from "./styles"
import { useCoffees } from "../../hook/useCoffees"

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
} 

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Insira o CEP."),
  street: zod.string().min(1, "Insira o endereço."),
  number: zod.string().min(1, "Insira o número."),
  complement: zod.string(),
  district: zod.string().min(1, "Insira o bairro."),
  city: zod.string().min(1, "Insira o bairro."),
  state: zod.string().min(1, "Insira o estado."),
  paymentMethods: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento"}
    }
  })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

interface ErrosType {
  errors: {
    [key: string]: {
      message: string
    }
  } 
}

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { cleanCart } = useCoffees()

  const { handleSubmit, register, formState } = confirmOrderForm

  const { errors } = formState as unknown as ErrosType

  const paymentMethodError = 
    errors?.paymentMethods?.message as unknown as String

  const navigate = useNavigate() 

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
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
          <form id="payment" onSubmit={handleSubmit(handleConfirmOrder)}>
            
            <div className="inputWrapper cep">
              <input
                type="text" 
                placeholder="CEP" 
                className="cep" 
                {...register("cep")}
              />
              {errors.cep?.message && (<span>{errors.cep?.message}</span>)}
            </div>
            <div className="inputWrapper street">
              <input 
                type="text" 
                placeholder="Rua" 
                className="street"
                {...register("street")}
              />
              {errors.street?.message && (
                <span>{errors.street?.message}</span>
              )}
            </div>
            <div className="inputWrapper">
              <input 
                type="text" 
                placeholder="Número" 
                {...register("number")}
              />
              {errors.number?.message && (
                <span>{errors.number?.message}</span>
              )}
            </div>
            <div className="inputWrapper complement">
              <input
                type="text" 
                placeholder="Complemento" 
                className="complement" 
                maxLength={32}
                {...register("complement")}
              />
              <span className="opitional">Opicional</span>
            </div>
            <div className="inputWrapper">
              <input 
                type="text" 
                placeholder="Bairro" 
                {...register("district")}
              />
              {errors.district?.message && (
                <span>{errors.district?.message}</span>
              )}
            </div>
            <div className="inputWrapper">
              <input 
                type="text" 
                placeholder="Cidade" 
                {...register("city")}
              />
              {errors.city?.message && (
                <span>{errors.city?.message}</span>
              )}
            </div>
            <div className="inputWrapper">
              <input 
                type="text" 
                placeholder="UF" 
                {...register("state")}
              />
              {errors.state?.message && (
                <span>{errors.state?.message}</span>
              )}
            </div>
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
              {
                Object.entries(paymentMethods).map(([key, { label, icon }]) =>(
                  <div key={label}>
                    <input 
                    type="radio" 
                    value={key} 
                    id={key} 
                    // name="paymentMethods"
                    {...register("paymentMethods")}
                    />
                    <label htmlFor={key}>
                      {icon}
                      {label}
                    </label>
                  </div>
                ))
              }
            </div>
              {
                paymentMethodError && <span>{paymentMethodError}</span>
              }
          </Payment>
        </FormOrderContainer>
        <SelectedCoffeeContainer>
          <strong>Cafés selecionados</strong>
          <Cart />
        </SelectedCoffeeContainer>
      </CheckoutContainer>
    </FormProvider>

  )
}