import styled from "styled-components";
import { colors } from "../../styles";
import lixeira from "../../assets/images/lixeira-de-reciclagem.svg";

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  background-color: #000;
  opacity: 0.8;
`;

export const Sidebar = styled.aside`
  background-color: ${colors.text};

  width: 100%;
  height: 100%;
  max-width: calc(360px - 16px);

  z-index: 1;
  padding: 32px 8px 0 8px;
  overflow-y: scroll;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    color: ${colors.text2};
  }
`;

export const CartItem = styled.li`
  list-style: none;
  display: flex;
  gap: 8px;
  padding: 8px;
  background-color: ${colors.text2};
  height: calc(100px - 16px);
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const FoodImage = styled.img``;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.text};
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    line-height: 22px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${lixeira});
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-position: center;

  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const AddCart = styled.button`
  background-color: ${colors.text2};
  color: ${colors.text};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
`;
