import "./App.css";

import { Navbar } from "./Components/navbar";

import { Footerc } from "./Components/Footer";
import { ProductsModule } from "./Context/ProductsModule";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <ProductsModule>
        <Navbar />
        <Home />
        <Footerc />
      </ProductsModule>
    </>
  );
}

export default App;
