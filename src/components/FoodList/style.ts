import styled from "styled-components";

export const ContainerFoodList = styled.ul`
  padding: 56px 170px 120px 170px;

  li {
    list-style: none;
  }
`;

export const ListFood = styled.div`
  width: fit-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  justify-content: center;
  align-items: center;
`;
