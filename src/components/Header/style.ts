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
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 170px;
  height: 180px;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TextCart = styled(CountCart)``;
