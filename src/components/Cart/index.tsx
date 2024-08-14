import {
  AddCart,
  CartContainer,
  CartItem,
  DeleteButton,
  Information,
  Overlay,
  Sidebar,
} from "./style";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";
import { formataPreco } from "../Food";
import { closeCart, deleteItem } from "../../redux/reducers/cart";
import { CardapioType } from "../../pages/Home";

const Cart = () => {
  const dispatch = useDispatch();

  const { items, visibleCart } = useSelector(
    (state: RootReducer) => state.cart
  );

  const getTotalPrice = items.reduce((acc, curr) => {
    return acc + curr.preco;
  }, 0);

  const deleteFood = (food: CardapioType) => {
    dispatch(deleteItem(food));
  };

  return (
    <CartContainer className={visibleCart ? "is-open" : ""}>
      <Overlay onClick={() => dispatch(closeCart())} />
      <Sidebar>
        <ul>
          {items.map((food) => (
            <CartItem key={food.id}>
              <img src={food.foto} alt={food.nome} />
              <Information>
                <h3>{food.nome}</h3>
                <span>{formataPreco(food.preco)}</span>
              </Information>
              <DeleteButton onClick={() => deleteFood(food)} />
            </CartItem>
          ))}
        </ul>
        <p>
          Valor total<span>{formataPreco(getTotalPrice)}</span>
        </p>
        <AddCart>Continuar com a entrega</AddCart>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
