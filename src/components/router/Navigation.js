import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { MdLibraryMusic } from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import BasketWidget from "../basket/BasketWidget";

const Navigation = props => {
  const mobButton = useRef(null);
  const basketIcon = useRef(null);

  const openMobMenu = e => {
    console.log("menu clicked");
    mobButton.current.classList.toggle("show");
    // this.menu = React.createRef();
  };
  const closeMenu = () => {
    mobButton.current.classList.toggle("show");
  };

  const basketHover = e => {
    basketIcon.current.classList += " show";
  };
  const basketLeave = e => {
    basketIcon.current.classList = "basketWidgetContainer";
    console.log(basketIcon);
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
          <div className="basketContainer">
            <p
              onClick={e => {
                basketHover(e);
              }}
            >
              <MdLibraryMusic />
              {props.basket.length}
            </p>
            <div className="basketWidgetContainer" ref={basketIcon} onClick={e => {
                  basketLeave(e);
                  console.log('widget')
                }}>
              <BasketWidget
                className="basketWidget"
                basket={props.basket}
              />
            </div>
          </div>
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
