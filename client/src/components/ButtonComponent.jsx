import React from 'react';
import './ButtonComponent.css';

const Button = ({iconPath, circular, link, color, backgroundColor}) => {

  const buttonStyle = {
    link, color, backgroundColor
  }

  if (circular) buttonStyle.circular = 50;

  return (
    <div className="Button">
      <p><span className="material-icons">
      {iconPath}
      </span></p>
    </div>
  );
};

export default Button;
