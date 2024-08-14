import { BrowserRouter } from "react-router-dom";
import { Globalcss } from "./styles";
import Rotas from "./routes";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Globalcss />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
