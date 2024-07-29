import styled from "styled-components";

export const ContainerFoodList = styled.ul`
  height: fit-content;
  min-height: 884px;
  width: 100%;
  margin-top: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }
`;

export const ListFood = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
`;
