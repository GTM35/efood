import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import { useGetRestaurantsQuery } from "../../service/api";

export interface CardapioType {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export interface RestaurantType {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string;
  cardapio: CardapioType[];
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Hero />
        <ProductList restaurants={restaurants} />
        <Footer />
      </>
    );
  } else {
    <p>Fazer um loader aqui</p>; /* TODO: Fazer um loader aqui. */
  }
};

export default Home;
