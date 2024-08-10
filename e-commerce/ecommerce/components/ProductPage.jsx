import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../style/ProductPage.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { addToBasket } from "../redux/slices/basketSlice";

function ProductPage() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      count,
    };
    dispatch(addToBasket(payload));
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="product-container">
      <img src={image} alt="" />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <h1>{price} ₺</h1>
        <div className="unit-button">
          <FaMinus onClick={decrement} style={{ paddingRight: "12px" }} />
          <h3>{count}</h3>
          <FaPlus onClick={increment} style={{ paddingLeft: "12px" }} />
        </div>
        <div>
          <button onClick={addBasket} className="add-to-cart">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
