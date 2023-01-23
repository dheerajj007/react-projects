import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {questions.map((question) => {
            const { title, info } = question;

            return <SingleQuestion title={title} info={info}></SingleQuestion>;
          })}
        </section>
      </div>
    </main>
  );
}
export default App;
