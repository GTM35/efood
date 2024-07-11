import styled from "styled-components";
import { colors } from "../../styles";

import bgImage from "../../assets/images/bg1.png";

export const CountCart = styled.p`
  font-weight: 900;
  font-size: 18px;
  color: ${colors.text};
`;

export const ContainerCountCart = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContainerHeader = styled.header`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextCart = styled(CountCart)``;
