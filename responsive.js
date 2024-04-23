import React from 'react';
import './app.css';

const handleAddToCart = (productName) => {
  // Implement your add to cart functionality here
  alert(`Added ${productName} to cart`);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Watches Ecommerce Site</h1>
      </header>
      <main>
        <h2>Welcome to our watches store!</h2>
        <div className="watch-container">
          <div className="watch-item">
            <img
              src="https://imagescdn.thecollective.in/img/app/product/9/979437-12900807.jpg?w=900&auto=format"
              alt="Men's Luxury Watch"
            />
            <h3>Men's Luxury Watch</h3>
            <p>A luxurious watch for men, featuring stainless steel casing and sapphire crystal.</p>
            <p>$199</p>
            <button onClick={() => handleAddToCart("Men's Luxury Watch")}>Add to Cart</button>
          </div>
          <div className="watch-item">
            <img
              src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_675/5580352_png/passage-chrono-watch--swiss-made--leather-strap--pink--rose-gold-tone-finish-swarovski-5580352.png"
              alt="Women's Fashion Watch"
            />
            <h3>Women's Fashion Watch</h3>
            <p>A stylish watch for women, perfect for everyday wear with its minimalist design.</p>
            <p>$149</p>
            <button onClick={() => handleAddToCart("Women's Fashion Watch")}>Add to Cart</button>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Watches Ecommerce</p>
      </footer>
    </div>
  );
}

export default App;

