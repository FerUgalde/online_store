import "./Cart.css";
import constants from "../common/config";
import DataContext from "../context/dataContext";
import { useContext } from "react";

function Cart() {
  const cart = useContext(DataContext).cart;
  let removeProductFromCart = useContext(DataContext).removeProductFromCart;

  function getNumProducts() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity;
    }
    return total;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  }

  function removeProduct(key) {
    removeProductFromCart(key);
  }

  return (
    <div className="cart page">
      <h1>Your Cart</h1>
      <h6>
        We have <span>{getNumProducts()}</span> ready for you!
      </h6>
      <div className="products-cart">
        <div className="list">
          {cart.map((prod) => (
            <div className="prod-cart">
              <div className="img">
                <img src={constants.IMAGE_PATH + prod.image} alt="product" />
              </div>
              <div className="head">
                <h2>{prod.title}</h2>
                <label>Category: {prod.category}</label>
              </div>
              <label>Unit Price: ${prod.price.toFixed(2)}</label>
              <label>Quantity: {prod.quantity}</label>
              <label>Total: ${prod.price * prod.quantity}</label>
              <button
                onClick={() => removeProduct(prod._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="total">
          <h3>Total</h3>
          <h4>${getTotal()}</h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;
