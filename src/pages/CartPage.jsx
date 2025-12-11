import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import "./CartPage.css";

export default function CartPage({ onCloseCart }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const grandTotal = items.reduce((sum, item) => {
    const numericCost =
      typeof item.cost === "string"
        ? Number(item.cost.replace("$", ""))
        : item.cost;
    return sum + numericCost * item.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <>
      <div className="cart-page">
        {items.length > 0 && <h2>Total Cost of Cart: ${grandTotal}</h2>}

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-cart-p">Your cart is empty</p>
          ) : (
            items.map((item) => {
              const numericCost =
                typeof item.cost === "string"
                  ? Number(item.cost.replace("$", ""))
                  : item.cost;

              const total = numericCost * item.quantity;

              return (
                <div
                  key={item.name}
                  className="cart-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="item-description">
                    <h4>{item.name}</h4>
                    <p>Unit price: ${numericCost}</p>

                    <div className="amount-selector">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.name))}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.name))}
                      >
                        +
                      </button>
                    </div>

                    <p>Total: ${total}</p>

                    <button
                      className="remove-button"
                      onClick={() => dispatch(removeItem(item.name))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="cart-footer">
        <button onClick={onCloseCart}>Continue Shopping</button>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}
