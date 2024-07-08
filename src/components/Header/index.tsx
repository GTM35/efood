import {
  CountCart,
  TextCart,
  ContainerCountCart,
  ContainerHeader,
} from "./style";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <ContainerHeader>
    <Link className="textLink" to={"/"}>
      Restaurantes
    </Link>

    <img src={logo} alt="Efood" />
    <ContainerCountCart>
      <CountCart>0</CountCart>
      <TextCart>produto(s) no carrinho</TextCart>
    </ContainerCountCart>
  </ContainerHeader>
);

export default Header;
