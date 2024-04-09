import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  let [quantity, setQt] = useState(1);

  function increase() {
    let newVal = quantity + 1;
    setQt(newVal);
    props.onChange(newVal);
  }

  function decrease() {
    let newVal = quantity - 1;
    if (newVal > 0) {
      setQt(newVal);
      props.onChange(newVal);
    }
  }

  return (
    <div className="quantity-picker">
      <button
        className="btn btn-sm btn-outline-success"
        disabled={quantity === 1}
        onClick={decrease}
      >
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-outline-success" onClick={increase}>
        +
      </button>
      {/* <div>
        <label>Total: ${props.price * quantity}</label>
      </div> */}
    </div>
  );
}

export default QuantityPicker;
