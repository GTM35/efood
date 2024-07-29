import { CardapioType } from "../../pages/Home";
import Food from "../Food";
import { ContainerFoodList, ListFood } from "./style";

type Props = {
  cardapio: CardapioType[];
};

const FoodList = ({ cardapio }: Props) => {
  console.log(cardapio);

  return (
    <ContainerFoodList>
      <ListFood>
        {cardapio.map((food) => (
          <li key={food.id}>
            <Food food={food} />
          </li>
        ))}
      </ListFood>
    </ContainerFoodList>
  );
};

export default FoodList;
