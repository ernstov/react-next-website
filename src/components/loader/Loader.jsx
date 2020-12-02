import React from "react";
import './Loader.scss';

const Loader = ({ loaderState }) => {

  return (
    <div className={`loader ${loaderState}`}>
      <div className="lodaer-shape"></div>
      <div className="lodaer-shape-2"></div>
    </div>
  );
}

export default Loader;