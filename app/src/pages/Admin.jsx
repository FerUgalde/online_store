import { useState } from "react";
import "./Admin.css";
import DataService from "../services/dataService";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });
  const [allProducts, setAllProducts] = useState([]);

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function saveCoupon() {
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
    product.price = parseFloat(product.price);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);

    // send the product to the server
    let service = new DataService();
    service.saveProduct(product);
  }

  return (
    <div className="admin page">
      <h1>Store Administration</h1>
      <div className="parent">
        <div className="prods-admin">
          <h4>Products</h4>

          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input
                onChange={handleProductChange}
                type="text"
                name="title"
                className="form-control"
              />
            </div>

            <div>
              <label className="form-label">Category</label>
              <input
                onChange={handleProductChange}
                type="text"
                name="category"
                className="form-control"
              />
            </div>

            <div>
              <label className="form-label">Image</label>
              <input
                onChange={handleProductChange}
                type="text"
                name="image"
                className="form-control"
              />
            </div>

            <div>
              <label className="form-label">Price</label>
              <input
                onChange={handleProductChange}
                type="number"
                name="price"
                className="form-control"
              />
            </div>

            <div className="action">
              <button onClick={saveProduct} className="btn btn-success">
                Save Product
              </button>
            </div>
          </div>
          <div className="list-p">
            <ul>
              {allProducts.map((p) => (
                <li>
                  {p.title} - {p.category} - ${p.price}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="coupons-admin">
          <h4>Coupons</h4>

          <div className="form">
            <div>
              <label className="form-label">Coupon code</label>
              <input
                onChange={handleCouponChange}
                name="code"
                type="text"
                className="form-control"
              />
            </div>

            <div>
              <label className="form-label">Discount</label>
              <input
                onChange={handleCouponChange}
                name="discount"
                type="text"
                className="form-control"
              />
            </div>

            <div className="action">
              <button onClick={saveCoupon} className="btn btn-success">
                Save Coupon
              </button>
            </div>
          </div>
          <div className="list-c">
            <ul>
              {allCoupons.map((c) => (
                <li>
                  {c.code} - ${c.discount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
