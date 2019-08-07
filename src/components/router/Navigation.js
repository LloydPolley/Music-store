import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => (
    <div className="navigationBarContainer">
        <NavLink to="/" activeClassName="activeNav" exact={true}>Home</NavLink>
        <NavLink to="/products" activeClassName="activeNav" exact={true}>Products</NavLink>
        <NavLink to="/bookings" activeClassName="activeNav" exact={true}>My Bookings</NavLink>
        <NavLink to="/account" activeClassName="activeNav" exact={true}>Account</NavLink>
        <NavLink to="/addProduct" activeClassName="activeNav" exact={true}>Add Product</NavLink>
        {/* <NavLink to="/" activeClassName="activeNav" exact={true}>Log out</NavLink> */}
    </div>
)

export default Navigation;