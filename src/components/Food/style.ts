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
    max-width: 304px;
    height: 167px;
    object-fit: cover;
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

export const Modal = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: none;
  justify-content: center;
  align-items: center;

  &.isVisible {
    display: flex;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  max-height: calc(344px - 64px);
  position: relative;
  z-index: 1;

  background-color: ${colors.text};
  padding: 32px;

  display: flex;
  gap: 24px;
  align-items: center;

  > img:first-child {
    width: 100%;
    height: 100%;
    max-width: 280px;
    max-height: 280px;
    object-fit: cover;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${colors.branco};
  height: 100%;

  h4 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
  }

  span,
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  p > span {
    display: block;
    margin-top: 30px;
  }

  button {
    width: 100%;
    max-width: 218px;
    height: 100%;
    max-height: 24px;
    background-color: ${colors.background};
    border: none;
    padding: 4px 6px;

    color: ${colors.text};
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
