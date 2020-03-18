import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
// import { MdLibraryMusic } from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import BasketWidget from "../components/basket/Widget";

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
    // console.log(basketIcon);
  };

  const basketAnimation = e => {
    this.basketHover();
    setTimeout(function() {
      this.basketLeave();
    }, 1500);
  };

  return (
    <div className="navBarContainer">
      <div className="navMobIcon" onClick={openMobMenu}>
        <FiChevronsRight />
      </div>
      <div className="navBar" ref={mobButton}>
        <div>
          <NavLink
            to="/"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            TrackSrc
          </NavLink>
        </div>
        <div className="navBar__linksContainer">
          <NavLink
            to="/likes"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Likes
          </NavLink>
          <NavLink
            to="/addProduct"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Upload
          </NavLink>
          {/* <div className="basketContainer">
            <p
              onClick={e => {
                basketHover(e);
              }}
            >
              {props.basket.length}
            </p>
            <div
              className="basketWidgetContainer"
              ref={basketIcon}
              onClick={e => {
                basketLeave(e);
                console.log("widget");
              }}
            >
              <BasketWidget
                className="basketWidget"
                basket={props.basket}
                onChange={() => {
                  console.log("updated basket");
                  basketAnimation();
                }}
              />
            </div>
          </div> */}
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
