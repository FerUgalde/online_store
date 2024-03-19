import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";

function Product(props) {
  function addProduct() {
    console.log("Adding product", props.info.title);
  }

  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} alt="product" />
      <h6>{props.info.title}</h6>
      <label>${props.info.price}</label>

      <QuantityPicker price={props.info.price} />

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
