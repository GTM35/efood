import Product from "../Product";
import { ProductContainer } from "./style";

type Product = {
  id: number;
  title: string;
  rating: number;
  img: string;
  description: string;
  tags: string[];
};

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => (
  <ProductContainer>
    {products.map((product) => (
      <Product
        id={product.id}
        key={product.id}
        title={product.title}
        description={product.description}
        rating={product.rating}
        img={product.img}
        tags={product.tags}
        link={`/perfil/${product.id}`}
      />
    ))}
  </ProductContainer>
);

export default ProductList;
