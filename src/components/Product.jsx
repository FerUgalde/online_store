import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  return (
    <div className="product">
      <img
        src={"/images/" + props.info.image}
        alt="product"
        style={{ width: "200px", height: "200px" }}
      />
      <h6>{props.info.title}</h6>
      <label>${props.info.price}</label>

      <QuantityPicker price={props.info.price} />
    </div>
  );
}

export default Product;

// QuantityPicker
