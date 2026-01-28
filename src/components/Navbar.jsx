import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">All Products</Link>
      <Link to="/cart">Shopping Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}

export default Navbar;
