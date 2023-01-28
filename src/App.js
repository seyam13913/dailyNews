import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import CategoryRoute from "./components/Routes/CategoryRoute";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <CategoryRoute />
    </BrowserRouter>
  );
}

export default App;
