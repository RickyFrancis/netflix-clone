import React from 'react';
import loader from '../loaders/netflix-loading-indicator.gif';
import '../styles/Loader.css';

function Loader() {
  return (
    <div className="loader__main">
      <img src={loader} alt="" className="loader__gif" />
    </div>
  );
}

export default Loader;
