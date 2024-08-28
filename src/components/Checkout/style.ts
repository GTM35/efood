import styled from "styled-components";
import { Sidebar } from "../Cart/style";
import { colors } from "../../styles";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: none;

  &.is-open {
    display: flex;
  }

  ${Sidebar} {
    color: ${colors.text2};

    h3 {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const DeliveryContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 8px;

  &.is-open {
    display: flex;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  input {
    max-height: 32px;
    border: none;
    background-color: ${colors.text2};
    color: ${colors.preto};
    padding: 8px;

    font-size: 14px;
    font-weight: 700;
  }

  small {
    font-weight: 700;
    color: #000;
    width: fit-content;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TwoFields = styled(Row)`
  flex-direction: row;
  justify-content: space-between;

  input {
    width: calc(155px - 16px);
  }
`;

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Button = styled.button`
  background-color: ${colors.text2};
  height: calc(24px - 8px);
  font-size: 16px;
  font-weight: 700;
  color: ${colors.text};
  height: 24px;
  width: 100%;
  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentContainer = styled(DeliveryContainer)`
  ${TwoFields} {
    #numberCard {
      width: calc(228px - 16px);
    }

    #cvv {
      width: calc(87px - 16px);
    }
  }
`;

export const ConfirmContainer = styled(DeliveryContainer)``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 0;
  }
`;
