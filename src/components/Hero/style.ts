import styled from "styled-components";
import bgImage from "../../assets/images/bg1.png";
import { colors } from "../../styles";

export const HeroContainer = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  height: 380px;
  padding: 0px 170px;
`;

export const Logo = styled.img`
  max-width: 125px;
  margin-top: 64px;
`;

export const HeadLine = styled.h1`
  max-width: 540px;
  color: ${colors.text};
  font-weight: bold;
  text-align: center;
  font-size: 36px;
  margin-bottom: 64px;
`;
