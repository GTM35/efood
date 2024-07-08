import Food from "../Food";
import { ContainerFoodList, ListFood } from "./style";

const FoodList = () => (
  <ContainerFoodList>
    <ListFood>
      <li>
        <Food />
      </li>
      <li>
        <Food />
      </li>
      <li>
        <Food />
      </li>
      <li>
        <Food />
      </li>
      <li>
        <Food />
      </li>
      <li>
        <Food />
      </li>
    </ListFood>
  </ContainerFoodList>
);

export default FoodList;
