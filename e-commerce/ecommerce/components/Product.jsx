import React from "react";
import "../style/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="products-img" src={image} alt="" />
      <div className="product-detail">
        <h5 className="product-title">{title}</h5>
        <h4>{price} ₺</h4>

        <button
          onClick={() => navigate("/product-page/" + id)}
          className="details-btn"
        >
          Ürün Detayını Gör
        </button>
      </div>
    </div>
  );
}

export default Product;
