import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

const Navigation = () => {
  const mobButton = useRef(null);
  let mobMenuShowing = false;

  const openMobMenu = e => {
    console.log("menu clicked");
    mobButton.current.classList.toggle("show");
    // this.menu = React.createRef();
  };
  const closeMenu = () => {
    mobButton.current.classList.toggle("show");
  }

  return (
    <div className="navBarContainer">
      <div
        className="navMobIcon"
        onClick={openMobMenu}>
        <FiChevronsRight />
      </div>
      <div className="navBar" ref={mobButton}>
        <div className="navBar__linksContainer">
          <NavLink to="/" activeClassName="activeNav" exact={true} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/products" activeClassName="activeNav" exact={true} onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/bookings" activeClassName="activeNav" exact={true} onClick={closeMenu}>
            My Bookings
          </NavLink>
          <NavLink to="/account" activeClassName="activeNav" exact={true} onClick={closeMenu}>
            Account
          </NavLink>
          <NavLink to="/addProduct" activeClassName="activeNav" exact={true} onClick={closeMenu}>
            Add Product
          </NavLink>
          {/* <NavLink to="/" activeClassName="activeNav" exact={true}>Log out</NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
