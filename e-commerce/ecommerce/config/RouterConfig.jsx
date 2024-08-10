import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../components/ProductPage";
import ContactPage from "../pages/ContactPage";
import BasketPage from "../pages/BasketPage";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-page/:id" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}

export default RouterConfig;
