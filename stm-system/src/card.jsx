import React from 'react';
import './Card.css';

const Card = ({ modulePicture, moduleName, teacherName, onEnroll }) => {
  return (
    <div className="card">
      <img src={modulePicture} alt={modulePicture} className="card-image" />
      <h3 className="card-module-name">{moduleName}</h3>
      <p className="card-teacher-name">Taught by: {teacherName}</p>
      <br />
      <button onClick={onEnroll} className="card-button">Enroll</button>
    </div>
  );
};

export default Card;
