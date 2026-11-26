const products = [
  { name: "iPhone 15", price: "$799", icon: "📱", color: "#e8e8ff" },
  { name: "Samsung S24", price: "$699", icon: "📱", color: "#e5f4ff" },
  { name: "MacBook Air", price: "$1199", icon: "💻", color: "#f0eaff" },
  { name: "HP Laptop", price: "$850", icon: "💻", color: "#e8f7f0" },
  { name: "iPad Pro", price: "$999", icon: "📟", color: "#fff0e5" },
  { name: "AirPods Pro", price: "$249", icon: "🎧", color: "#fce8f0" },
  { name: "Smart Watch", price: "$199", icon: "⌚", color: "#e6f0ff" },
  { name: "PlayStation 5", price: "$499", icon: "🎮", color: "#eeeaff" },
  { name: "Camera", price: "$550", icon: "📷", color: "#fff5df" },
  { name: "Speaker", price: "$120", icon: "🔊", color: "#e2f8f5" },
  { name: "Keyboard", price: "$80", icon: "⌨️", color: "#f0f0f0" },
  { name: "Gaming Mouse", price: "$60", icon: "🖱️", color: "#ffe9e4" },
];

function Product() {
  return (
    <main className="product-page">
      <div className="hero">
        <h1>Discover the Latest Technology</h1>
        <p>Best gadgets. Best prices. Best quality.</p>
      </div>

      <h2 className="section-title">Our Products</h2>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div
              className="product-image"
              style={{ backgroundColor: product.color }}
            >
              <span>{product.icon}</span>
            </div>

            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>

            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Product;