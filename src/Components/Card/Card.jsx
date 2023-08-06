import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card__container">
          <img src={props.img} alt="react logo" className="card__img" />
        </div>
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <button
            className="card__btn"
            onClick={() => navigate(`/${props.title}`)}
          >
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
