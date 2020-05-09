import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
// import { MdLibraryMusic } from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";

const Navigation = props => {
  const mobButton = useRef(null);

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
        <div>
          <NavLink
            to="/"
            activeClassName="activeNav"
            exact={true}
            onClick={closeMenu}
          >
            Soundr
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
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // basket: state.basket
  };
};

export default connect(mapStateToProps)(Navigation);
