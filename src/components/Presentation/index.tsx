import {
  TextKitchen,
  TextTitleRestaurant,
  ContainerPresentation,
  Shadow,
} from "./style";

import bgImage from "../../assets/images/food2.png";

const Presentation = () => {
  return (
    <ContainerPresentation style={{ backgroundImage: `url(${bgImage})` }}>
      <Shadow />
      <TextKitchen>Italiana</TextKitchen>
      <TextTitleRestaurant>La Dolce Vita Trattoria</TextTitleRestaurant>
    </ContainerPresentation>
  );
};

export default Presentation;
