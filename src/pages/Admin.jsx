import "./Admin.css";

function Admin() {
  return (
    <div className="admin page">
      <h1>Store Administration</h1>
      <div className="parent">
        <div className="prods-admin">
          <h4>Products</h4>
        </div>
        <div className="coupons-admin">
          <h4>Coupons</h4>
        </div>
      </div>
    </div>
  );
}

export default Admin;
