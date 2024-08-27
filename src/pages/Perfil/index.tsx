import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";
import { useParams } from "react-router-dom";
import { useGetRestaurantSelectedQuery } from "../../service/api";

type IdParam = {
  id: string;
};

const Perfil = () => {
  const { id } = useParams() as IdParam;

  const { data: restaurant } = useGetRestaurantSelectedQuery(id);

  if (!restaurant) {
    return <h3>Carregando...</h3> /* TODO: Colocar um loader aqui */;
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
