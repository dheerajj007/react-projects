import React, { useState } from "react";
import data from "./data";
function App() {
  const [lines, setLines] = useState(0);
  const [paras, setParas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParas = [];
    let amount = parseInt(lines);
    if (lines <= 0) {
      amount = 1;
    }
    if (lines > 8) {
      amount = 8;
    }
    setParas(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM EPSUM</h3>
      <form className="lorem-form">
        <label htmlFor="paragraph">Paragraphs: </label>
        <input
          type="text"
          id="lines"
          name="lines"
          value={lines}
          onChange={(e) => setLines(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paras.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
