import { RestaurantType } from "../../pages/Home";
import Product from "../Product";
import { ProductContainer } from "./style";

type Props = {
  restaurants: RestaurantType[];
};

const ProductList = ({ restaurants }: Props) => {
  const tags = (restaurant: RestaurantType) => {
    const tags = [];
    if (restaurant.destacado) {
      tags.push("Destaque da semana");
      tags.push(restaurant.tipo);

      return tags;
    }
    tags.push(restaurant.tipo);
    return tags;
  };

  return (
    <ProductContainer>
      {restaurants.map((product) => (
        <Product
          id={product.id}
          key={product.id}
          title={product.titulo}
          description={product.descricao}
          rating={product.avaliacao}
          img={product.capa}
          tags={tags(product)}
          link={`/perfil/${product.id}`}
        />
      ))}
    </ProductContainer>
  );
};

export default ProductList;
