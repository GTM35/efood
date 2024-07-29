import { useEffect, useState } from "react";
import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import { useParams } from "react-router-dom";
import { RestaurantType } from "../Home";

const Perfil = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantType>();

  console.log(id);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  if (!restaurant) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />
      <Presentation
        image={restaurant?.capa}
        kitchen={restaurant.tipo}
        title={restaurant.titulo}
      />
      <FoodList cardapio={restaurant.cardapio} />
      <Footer />
    </>
  );
};

export default Perfil;
