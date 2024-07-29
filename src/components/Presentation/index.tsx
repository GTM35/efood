import {
  TextKitchen,
  TextTitleRestaurant,
  ContainerPresentation,
  Shadow,
} from "./style";

import { ContentAlign } from "../../styles";

type Props = {
  image: string;
  title: string;
  kitchen: string;
};

const Presentation = ({ image, kitchen, title }: Props) => {
  return (
    <ContainerPresentation style={{ backgroundImage: `url(${image})` }}>
      <ContentAlign>
        <Shadow />
        <TextKitchen>{kitchen}</TextKitchen>
        <TextTitleRestaurant>{title}</TextTitleRestaurant>
      </ContentAlign>
    </ContainerPresentation>
  );
};

export default Presentation;
