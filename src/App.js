import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ShopProduct from "./components/ShopProduct";
import ShopDetails from "./components/ShopDetails";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopProduct/>}/>
        <Route path="/shopDetails/:ProId" element={<ShopDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
