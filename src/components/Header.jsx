import { useState } from "react";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage";
import cartIcon from "../assets/cart-icon.png";
import "./Header.css";

export function Header() {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state) => state.cart.items);

  const handleCloseCart = () => setShowCart(false);

  return (
    <div className="header">
      <h1>Paradise</h1>
      <button
        onClick={() => setShowCart((prev) => !prev)}
        className="cart-button"
      >
        <img className="cart-icon" src={cartIcon} />
        <p className="cart-number">{items.length}</p>
      </button>

      {showCart && (
        <div
          className={`cart-overlay ${showCart ? "open" : ""}`}
          onClick={handleCloseCart} 
        >
          <div
            className="cart-container"
            onClick={(e) => e.stopPropagation()} 
          >
            <CartPage onCloseCart={handleCloseCart} />
          </div>
        </div>
      )}
    </div>
  );
}
