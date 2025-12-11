import { Header } from "../components/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import productsArray from "../data/ProductsArray.json";
import "./ProductsPage.css";

export function ProductsPage({ products }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // Check if a product is already in the cart
  const isInCart = (productName) => {
    return items.some((item) => item.name === productName);
  };

  return (
    <>
      <Header />

      {productsArray.map((plantCategory) => (
        <div
          className="category"
          key={plantCategory.category}
        >
          <h2 className="category-name">{plantCategory.category}</h2>

          <div className="grid-container">
            {plantCategory.plants.map((plant) => {
              const inCart = isInCart(plant.name); // define it here

              return (
                <div
                  key={plant.name}
                  className="grid-item"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <div className="grid-item-content">
                    <p className="plant-name">{plant.name}</p>
                    <p className="plant-description">{plant.description}</p>

                    <button
                      className={`add-to-cart-btn ${inCart ? "in-cart" : ""}`}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {inCart ? "Added to cart" : "Add to cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
