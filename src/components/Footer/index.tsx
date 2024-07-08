import face from "../../assets/images/icon-face.svg";
import insta from "../../assets/images/icon-insta.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import logo from "../../assets/images/logo.png";

import {
  FooterText,
  ImageLogo,
  ImageSocials,
  Socials,
  FooterContainer,
} from "./styles";

const Footer = () => (
  <FooterContainer>
    <ImageLogo src={logo} alt="Efood" />
    <Socials>
      <a href="#">
        <ImageSocials src={insta} alt="Instagram" />
      </a>
      <a href="#">
        <ImageSocials src={face} alt="Facebook" />
      </a>
      <a href="#">
        <ImageSocials src={twitter} alt="Twitter" />
      </a>

      <img src="" alt="" />
    </Socials>

    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterContainer>
);

export default Footer;
