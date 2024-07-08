import styled from "styled-components";

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
  height: 280px;
  padding: 24px 170px 32px 170px;
  color: #fff;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
