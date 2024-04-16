import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [data, setData] = useState([]);

  async function loadCatalog() {
    let service = new DataService();
    let cat = await service.getCatalog();
    setData(cat);
  }

  useEffect(function () {
    loadCatalog();
  }, []);

  return (
    <div className="catalog page">
      <h1>Our amazing catalog!!</h1>

      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;
