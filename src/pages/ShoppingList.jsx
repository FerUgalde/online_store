import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(["Test 1", "Test 2", "Test 3"]);
  const [text, setText] = useState([""]);

  function addItem() {
    /**
     * create a copy
     * modify your copy
     * set array
     */
    let copy = [...list];
    copy.push(text);
    setList(copy);
  }

  function handleTextChange(e) {
    const val = e.target.value;
    setText(val);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>
      <div className="inputAdd input-group mb-3">
        <input
          onChange={handleTextChange}
          className="form-control"
          type="text"
        />
        <button className="btn btn-success" onClick={addItem}>
          Add
        </button>
        <button onClick={deleteAll} className="btn btn-danger">
          Clear
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
