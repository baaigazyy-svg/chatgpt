import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h2 className="logo">TECH<span>STORE</span></h2>

        <nav>
          <Link to="/">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;