import styled from "styled-components";
import { colors } from "../../styles";

export const ImageLogo = styled.img`
  width: 100%;
  max-width: 125px;
`;

export const ImageSocials = styled.img`
  width: 100%;
  max-width: 25px;
`;

export const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`;

export const FooterText = styled.p`
  font-size: 10px;
  width: 480px;
  text-align: center;
  font-weight: 400;
  color: ${colors.text};
  margin-top: 80px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.text2};
  padding: 40px 0;

  margin-top: 50px;
`;
