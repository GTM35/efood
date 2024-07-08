//import { useParams } from "react-router-dom";

import FoodList from "../../components/FoodList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Presentation from "../../components/Presentation";

const Perfil = () => {
  //const { id } = useParams();

  return (
    <>
      <Header />
      <Presentation />
      <FoodList />
      <Footer />
    </>
  );
};

export default Perfil;
