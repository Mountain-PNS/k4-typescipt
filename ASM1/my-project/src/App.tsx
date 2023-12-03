import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/LoginPage";
import Header from "./components/client/Header";
import Footer from "./components/client/Footer";
import Profile from "./pages/Profile";
import Layout from "./components/client/Layout";
import ProductDetailwidthId from "./pages/product/ProductDetailwidthId";
import Dashboard from "./components/admin/Dashboard";
import Products from "./pages/admin/ProductsList";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Addproduct from "./pages/admin/Addproduct";
import PrivateRouter from "./components/admin/PrivateRouter";
import LogupPage from "./pages/login/LogupPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ProductDetailwidthId />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logup" element={<LogupPage />} />
          <Route path="/" element={<PrivateRouter><Dashboard /></PrivateRouter>}>
            <Route path="/admin" element={<Products />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/products/add" element={<Addproduct  />} />
            <Route path="/admin/products/:id" element={<UpdateProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
