import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>Your cart is empty 😢</p>}

      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
