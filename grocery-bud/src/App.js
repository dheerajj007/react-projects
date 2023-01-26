import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { FaLess } from "react-icons/fa";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(0);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  const removeItem = (id) => {
    showAlert(true, "Item removed", "danger");
    const newlist = list.filter((item) => item.id != id);
    setList(newlist);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter something", "danger");
    } else if (name && isEditing) {
      //show editing
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, title: name };
          return item;
        })
      );

      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "edited the value", "success");
    } else {
      showAlert(true, "Item added to list", "success");
      const newitem = { id: new Date().getDate.toString(), title: name };
      setList([...list, newitem]);

      setName("");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button
          className="clear-btn"
          onClick={() => {
            setList([]);
            showAlert(true, "List Cleared", "danger");
          }}
        >
          Clear Items
        </button>
      </div>
    </section>
  );
}

export default App;
