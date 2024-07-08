import logo from "../../assets/images/logo.png";
import { HeroContainer, Logo, HeadLine } from "./style";

const Hero = () => (
  <HeroContainer>
    <Logo src={logo} alt="Efood" />
    <HeadLine>Viva experiências gastronômicas no conforto da sua casa</HeadLine>
  </HeroContainer>
);

export default Hero;
