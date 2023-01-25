import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, item]);
    console.log(itemList);
  };
  return (
    <section className="section-center">
      <form className="grocery-form">
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            id="item"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div className="grocery-container">
        {itemList.map((item) => {
          return <List item={item} />;
        })}
      </div>
    </section>
  );
}

export default App;
