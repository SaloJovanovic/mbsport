import React from 'react';
import './UnderConstruction.scss';

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-sign">
        <div className="crane"></div>
        <h1>Stranica u izradi</h1>
        <p>Radimo na ovoj stranici. Molimo vas da se vratite kasnije!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
