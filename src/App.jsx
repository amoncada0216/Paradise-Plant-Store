import { useState } from "react";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import plantLeft from "./assets/plant-left.png";
import plantRight from "./assets/plant-right.png";
import "./App.css";

function App() {
  const [showProductsPage, setShowProductsPage] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductsPage(true);
  };
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-bg">
          <img
            src={plantLeft}
            className="plant plant-left"
          />
          <img
            src={plantRight}
            className="plant plant-right"
          />
        </div>

        <div className="hero-content">
          <h1>Paradise</h1>

          <p>
            Welcome to a place where <span className="big-text"> green</span>{" "}
            <br />
            meets <span className="big-text">serenity</span> in perfect
            <br /> living <span className="big-text">harmony</span>
          </p>

          <p>
            Here, we celebrate the calming presence of plants, the joy they
            bring into our spaces, and the natural harmony they create in our
            everyday life, enriching every moment. <br />
            <br />
            Discover your perfect plant and let nature transform your home.
          </p>

          <button onClick={handleGetStartedClick}>Get Started</button>
        </div>

        <div className={`product-list ${showProductsPage ? "visible" : ""}`}>
          <ProductsPage />
        </div>
      </div>
    </>
  );
}

export default App;
