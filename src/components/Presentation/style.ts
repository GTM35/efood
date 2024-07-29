import styled from "styled-components";
import { ContentAlign } from "../../styles";

export const TextKitchen = styled.h2`
  font-weight: 100;
  font-size: 32px;
  z-index: 1;
`;

export const TextTitleRestaurant = styled.h1`
  font-weight: 900;
  font-size: 32px;
  color: #fff;
  z-index: 1;
`;

export const ContainerPresentation = styled.section`
  height: 223px;
  max-height: 1366px;
  color: #fff;
  position: relative;
  padding: 32px 0 25px;
  margin-bottom: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${ContentAlign} {
    flex-direction: column;
    height: 100%;
    align-items: start;
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
