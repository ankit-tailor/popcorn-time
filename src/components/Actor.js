import React from "react";
import "./Actor.css";

const Actor = ({ title, image, role }) => {
  return (
    <div className="actor">
      <img src={image} alt="actor_profile" />
      <p className="actor__title">{title}</p>
      <p className="actor__role">{role}</p>
    </div>
  );
};

export default Actor;
