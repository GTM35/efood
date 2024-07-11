import {
  CountCart,
  TextCart,
  ContainerCountCart,
  ContainerHeader,
} from "./style";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ContentAlign } from "../../styles";

const Header = () => (
  <ContainerHeader>
    <ContentAlign>
      <Link className="textLink" to={"/"}>
        Restaurantes
      </Link>

      <img src={logo} alt="Efood" />
      <ContainerCountCart>
        <CountCart>0</CountCart>
        <TextCart>produto(s) no carrinho</TextCart>
      </ContainerCountCart>
    </ContentAlign>
  </ContainerHeader>
);

export default Header;
