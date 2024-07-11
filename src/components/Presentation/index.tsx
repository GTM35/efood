import {
  TextKitchen,
  TextTitleRestaurant,
  ContainerPresentation,
  Shadow,
} from "./style";

import bgImage from "../../assets/images/food2.png";
import { ContentAlign } from "../../styles";

const Presentation = () => {
  return (
    <ContainerPresentation style={{ backgroundImage: `url(${bgImage})` }}>
      <ContentAlign>
        <Shadow />
        <TextKitchen>Italiana</TextKitchen>
        <TextTitleRestaurant>La Dolce Vita Trattoria</TextTitleRestaurant>
      </ContentAlign>
    </ContainerPresentation>
  );
};

export default Presentation;
