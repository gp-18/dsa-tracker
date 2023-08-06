import React from "react";
import "../Card/Card.css";

const Insideformat = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="iwrapper">
        {props.data.map((item) => (
          <div className="card">
            <div className="card__body">
              <h2 className="card__title">{item.Problem}</h2>
              <a href={item.URL}>
                <button className="card__btn">View</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Insideformat;
