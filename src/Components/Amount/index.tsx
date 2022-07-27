import { Minus, Plus } from "phosphor-react";
import { AmountContainer } from "./styles";

export function Amount() {
  return (
    <AmountContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </AmountContainer>
  )
}