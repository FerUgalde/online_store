import { useState } from "react";
import "./QuantityPicker.css";

const QuantityPicker = (props) => {
  let [quantity, setQt] = useState(1);

  const increase = () => {
    setQt(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQt(quantity - 1);
    }
  };

  return (
    <div className="quantity-picker">
      <button onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
      <div>
        <label>Total: ${props.price * quantity}</label>
      </div>
    </div>
  );
};

export default QuantityPicker;
