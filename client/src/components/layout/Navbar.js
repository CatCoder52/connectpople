import React, { useState, Fragment } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <MDBNavItem>
        <NavLink to="/profiles" className="ml-5 text-dark">
          Developers
        </NavLink>
      </MDBNavItem>
      <MDBNavItem>
        <NavLink to="/posts" className="ml-5 text-dark">
          Posts
        </NavLink>
      </MDBNavItem>
      <MDBNavItem>
        <NavLink to="/dashboard" className="ml-5 text-dark">
          <i className="fas fa-user"></i> Dashboard
        </NavLink>
      </MDBNavItem>
      <MDBNavItem>
        <NavLink onClick={logout} to="/" className="ml-5 text-dark">
          <i className="fas fa-sign-out-alt"></i> Logout
        </NavLink>
      </MDBNavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <MDBNavItem>
        <NavLink to="/register" className="ml-5 text-dark">
          Signup
        </NavLink>
      </MDBNavItem>
      <MDBNavItem>
        <NavLink to="/login" className="ml-5 text-dark">
          Login
        </NavLink>
      </MDBNavItem>
    </Fragment>
  );

  const [state, setstate] = useState(false);

  const toggleCollapse = () => {
    setstate(!state);
  };

  return (
    <MDBNavbar className="bg-white px-5" dark expand="md">
      <Link to="/">
        <MDBNavbarBrand>
          <strong className="text-dark text-center">
            <i className="fas fa-network-wired mr-3" />
            Devto
          </strong>
        </MDBNavbarBrand>
      </Link>
      <MDBNavbarToggler onClick={toggleCollapse} className="linenav" />
      <MDBCollapse id="navbarCollapse5" isOpen={state} navbar>
        <MDBNavbarNav right>
          {!loading && isAuthenticated ? authLinks : guestLinks}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired //-> auth.js auth reducer obj
};

const mapStateToProps = (state) => ({
  // this auth(reducer->rootreducer) has all auth properties from initialState=state in auth.js auth reducer obj
  auth: state.auth // state.singleReducer -> rootReucer
});

export default connect(mapStateToProps, { logout })(Navbar);
