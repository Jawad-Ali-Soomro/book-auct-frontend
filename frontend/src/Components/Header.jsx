import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header flex">
      <div className="logo">
        <a href="">
          <img src="./logo.png" alt="" />
        </a>
      </div>
      <div className="search-bar flex">
        <input type="text" />
        <i className="uil uil-search flex"></i>
      </div>
      <i className="uil uil-bars icon" onClick={() => setShowMenu(true)}></i>
      {showMenu == true ? (
        <>
          <div className="main-navs flex">
            <i
              className="uil uil-multiply close-btn"
              onClick={() => setShowMenu(false)}
            ></i>
            <div className="main-menu">
              <h1 data-aos="HOme">Home</h1>
              <h1 data-aos="About">About </h1>
              <h1 data-aos="books">Contact </h1>
              <h1 data-aos="open">Profile</h1>
              <h1 data-aos="closed">Books</h1>
            </div>
          </div>
        </>
      ) : (
        this
      )}
    </div>
  );
};

export default Header;
