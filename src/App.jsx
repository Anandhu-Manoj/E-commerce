import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import View from "./Pages/View";
import Pnf from "./Pages/Pnf";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/:id/view" element={<View />}></Route>
        <Route path="/*" element={<Pnf/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
