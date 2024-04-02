import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import { useState, useContext } from "react";

import DataContext from "../context/dataContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  let addProductToCart = useContext(DataContext).addProductToCart;

  function addProduct() {
    let prod = { ...props.info };
    prod.quantity = quantity;

    addProductToCart(prod);
  }

  function quantityChanged(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} alt="product" />
      <h6>{props.info.title}</h6>
      <label>${props.info.price.toFixed(2)}</label>

      <QuantityPicker onChange={quantityChanged} />
      <label className="total">Total: ${getTotal()}</label>

      <div className="buttonAdd d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-success" onClick={addProduct}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;

// QuantityPicker
