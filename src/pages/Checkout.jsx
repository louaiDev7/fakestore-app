import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 😢</p>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map(item => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-footer">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Confirm Purchase</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
