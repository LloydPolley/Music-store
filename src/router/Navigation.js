import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import './nav.scss';

const Navigation = props => {
  const mobButton = useRef(null);

  return (
    <div className="navBarContainer">
      <div className="navBar" ref={mobButton}>
        <div>
          <NavLink
            to="/"
            activeClassName="activeNav"
            exact={true}
          >
            Soundr
          </NavLink>
        </div>
        <div className="navBar__linksContainer">
          <NavLink
            to="/tracks"
            activeClassName="activeNav"
            exact={true}
          >
            Tracks
          </NavLink>
          <NavLink
            to="/likes"
            activeClassName="activeNav"
            exact={true}
          >
            Likes
          </NavLink>
          <NavLink
            to="/addProduct"
            activeClassName="activeNav"
            exact={true}
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
