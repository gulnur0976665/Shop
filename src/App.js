import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ShopProduct from "./components/ShopProduct";
import ShopDetails from "./components/ShopDetails";
import Search from "./components/Search";
import Backet from "./components/Backet";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shopDetails/:ProId" element={<ShopDetails />} />
        <Route path="/backet" element={<Backet />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
