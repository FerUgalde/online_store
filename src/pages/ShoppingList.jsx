import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(["Test 1", "Test 2", "Test 3"]);

  function addItem() {
    let copy = [...list];
    copy.push("new");
    setList(copy);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>
      <div className="inputAdd input-group mb-3">
        <input className="form-control" type="text" />
        <button className="btn btn-outline-success" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="list">
        <ul>
          {list.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
