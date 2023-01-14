import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((people) => {
        return (
          <article className="person">
            <img src={people.image} />
            <div>
              <h4>{people.name}</h4>
              <p>{people.age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
