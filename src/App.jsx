import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyState from "./context/data/MyState";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import Order from "./pages/order/Order";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import Allproducts from "./pages/allProducts/AllProducts";

const App = () => {
  return (
    <>
    <Router>
      <MyState> 
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/cart" element={ <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>}></Route>
            <Route path="/allProducts" element={<Allproducts />}></Route>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/addProduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            ></Route>
            <Route
              path="/updateProduct"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProduct />
                </ProtectedRouteForAdmin>
              }
            ></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            
            <Route path="/productInfo/:id" element={<ProductInfo />}></Route>
            
            <Route path="/*" element={<NoPage />}></Route>
          </Routes>
          <ToastContainer />
          </MyState>
        </Router>
      
    </>
  );
};

export default App;

//User protected route
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "sbhm1990@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
