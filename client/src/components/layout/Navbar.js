import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';
import { NavLink, Link } from 'react-router-dom';

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="bg-white px-5" dark expand="md">
        <Link to='/'>
          <MDBNavbarBrand>
            <strong className="text-dark text-center">
              <i className="fas fa-network-wired mr-3" />
              Contio
            </strong>
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler onClick={this.toggleCollapse} className="linenav" />
        <MDBCollapse id="navbarCollapse5" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <NavLink to="/" className="ml-5 text-dark">
                Developers
              </NavLink>
            </MDBNavItem>
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
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
