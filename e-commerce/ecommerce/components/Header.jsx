import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import "../style/Header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { products } = useSelector((store) => store.basket);

  const navigate = useNavigate();

  return (
    <div className="flex-row">
      <h3>Anıl Şenol E-Commerce</h3>
      <div className="links">
        <a className="home-page" href="/">
          Ana Sayfa
        </a>
        <a className="contact" href="/contact">
          İletişim
        </a>
      </div>

      <div className="header">
        <Badge badgeContent={products.length} color="secondary">
          <CiShoppingBasket
            onClick={() => navigate("/basket")}
            className="icons"
          />
        </Badge>
      </div>
    </div>
  );
};
