import { Card, Button, Title, Description } from "./style";
import food from "../../assets/images/food3.png";

const Food = () => (
  <Card>
    <img src={food} alt="Comida" />
    <Title>Pizza Marguerita</Title>
    <Description>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Description>
    <Button>Adicionar ao carrinho</Button>
  </Card>
);

export default Food;
