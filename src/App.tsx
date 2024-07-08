import { BrowserRouter } from "react-router-dom";
import { Globalcss } from "./styles";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Globalcss />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
