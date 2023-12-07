import React from 'react';
import HomeImage from '/images/HomePage.gif';

function LogHomePage() {
  return (
    <div className="homePage">
      <h1 className="homePageComp">SmileMile Logistics</h1>
      <img src={HomeImage} alt="Description of the image" />
    </div>
  );
}

export default LogHomePage;