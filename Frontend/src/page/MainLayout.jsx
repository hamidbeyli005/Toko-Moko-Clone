import Footer from "components/Footer";
import Navi from "components/Navbar";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { products } from "store/productSlice";
import axios from "axios";

function MainLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`/api/products`);
       dispatch(products(res.data.products));
    };
    getProducts();
  }, []);
  return (
    <>
      <Navi />
      <Outlet />
      <Footer/>
    </>
  );
}

export default MainLayout;
