import React from "react";

import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img src="assets/img/logo.svg" alt="" />
      <div className="logo-title">
        <div>
          <span>graphicarea</span>
          <span>frontend development</span>
        </div>
      </div>
    </div>
  );
}

export default Logo;
