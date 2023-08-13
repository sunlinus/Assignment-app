import MainHeader from "./components/Layout/MainHeader";

import Cart from "./components/screens/Cart";
import Products from "./components/screens/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
