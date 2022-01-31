import React from 'react';

import './Circle.scss';

function Circle({ dimensions, imageUrl }) {
  return (
    <div
      className="circle-cmp app__flex"
      style={{
        width: dimensions,
        height: dimensions,
      }}
    >
      <img src={imageUrl} alt="profile_bg" />
    </div>
  );
}

export default Circle;
