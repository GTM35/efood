import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${colors.text};

  width: calc(100% - 16px);
  height: fit-content;
  padding: 8px;

  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 4px;
  background-color: ${colors.text2};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  border: none;
  cursor: pointer;
  color: ${colors.text};
`;

export const Title = styled.h4`
  color: ${colors.text2};
  font-size: 16px;
  font-weight: 900;
`;

export const Description = styled.p`
  color: ${colors.text2};
  font-size: 14px;
  font-weight: 400;
`;
