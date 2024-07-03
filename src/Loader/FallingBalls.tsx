import React from "react";
import "./FallingBalls.css";

const FallingBalls: React.FC = () => {
  return (
    <div className="newtons-cradle">
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
    </div>
  );
};

export default FallingBalls;
