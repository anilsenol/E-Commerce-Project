import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/Basket.css";
import {
  calculateTotalAmount,
  removeFromBasket,
} from "../redux/slices/basketSlice";

function BasketPage() {
  const { products, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, []);

  const basketProducts = () => {
    return (
      products &&
      products.map((product) => (
        <div key={product.id} className="basket-products">
          <img
            src={product.image}
            alt={product.title}
            width={180}
            height={180}
          />
          <div className="card-product-details">
            <h4>
              {product.title} <p> Adet:{product.count}</p>
              <p>
                Tekil Fiyat:
                {product.price} ₺
              </p>
            </h4>

            <button
              onClick={() => handleRemoveFromBasket(product.id)}
              className="delete-btn"
            >
              Sepetten Çıkart
            </button>
          </div>
        </div>
      ))
    );
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Sepetinizdeki Ürünler</h3>
      <div>{basketProducts()}</div>
      <h2 style={{ textAlign: "center", color: "#aa00b0" }}>
        Toplam Tutar: {totalAmount}
      </h2>
    </div>
  );
}

export default BasketPage;
