import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";

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
  const [listRestaurant, setListRestaurant] = useState<RestaurantType[]>([]);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setListRestaurant(res));
  }, []);

  return (
    <>
      <Hero />
      <ProductList restaurants={listRestaurant} />
      <Footer />
    </>
  );
};

export default Home;
