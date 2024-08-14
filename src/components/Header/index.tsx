import {
  CountCart,
  TextCart,
  ContainerCountCart,
  ContainerHeader,
} from "./style";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ContentAlign } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../redux/reducers/cart";
import { RootReducer } from "../../redux/store";

const Header = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  return (
    <ContainerHeader>
      <ContentAlign>
        <Link className="textLink" to={"/"}>
          Restaurantes
        </Link>

        <img src={logo} alt="Efood" />
        <ContainerCountCart onClick={() => dispatch(openCart())}>
          <CountCart>{items.length}</CountCart>
          <TextCart>produto(s) no carrinho</TextCart>
        </ContainerCountCart>
      </ContentAlign>
    </ContainerHeader>
  );
};

export default Header;
