import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";

import { listProduct } from "../../service/api";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero />

        <ProductList products={listProduct} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
