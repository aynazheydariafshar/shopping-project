import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Products from "pages/Products";
import SingleProduct from "pages/SingleProduct";
import { Route, Routes } from "react-router-dom";

const RoutesPage = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Products />} path="/products" />
      <Route element={<SingleProduct />} path="/products/:id" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default RoutesPage;
