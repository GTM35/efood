import {
  AddCart,
  CartContainer,
  CartItem,
  DeleteButton,
  Information,
  Overlay,
  Sidebar,
} from "./style";

import pizza from "../../assets/images/food3.png";

const Cart = () => {
  return (
    <CartContainer>
      <Overlay></Overlay>
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} alt="" />
            <Information>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </Information>
            <DeleteButton />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="" />
            <Information>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </Information>
            <DeleteButton />
          </CartItem>
        </ul>
        <p>
          Valor total<span>R$ 182,70</span>
        </p>
        <AddCart>Continuar com a entrega</AddCart>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
