import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";

const Navigation = props => {
  const mobButton = useRef(null);
  console.log("nav state", props);

  const openMobMenu = e => {
    console.log("menu clicked");
    mobButton.current.classList.toggle("show");
    // this.menu = React.createRef();
  };
  const closeMenu = () => {
    mobButton.current.classList.toggle("show");
  };

  return (
    <div className="navBarContainer">
      <div className="navMobIcon" onClick={openMobMenu}>
        <FiChevronsRight />
      </div>
      <div className="navBar" ref={mobButton}>
        <div className="navBar__linksContainer">
          <NavLink
            to="/"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/basket"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            My Basket
          </NavLink>
          <NavLink
            to="/account"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Account
          </NavLink>
          <NavLink
            to="/addProduct"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Admin
          </NavLink>
          {/* <NavLink to="/" activeClassName="activeNav" exact={true}>Log out</NavLink> */}
        </div>
        <div className="basketContainer">
          <p>Basket Items: {props.basket.length}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    basket: state.basket
  };
};

export default connect(mapStateToProps)(Navigation);
