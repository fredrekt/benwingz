import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import { Link } from 'gatsby'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="bg-primary" fixed="top" className="p-3 py-4 my-3 z-depth-0" dark expand="md" scrolling transparent>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center className="text-uppercase">
                  <MDBNavItem className="px-4">
                      <Link className="nav-link" to='/'>
                        Home
                      </Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" to="/about">About</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" to='/menu'>Menu</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" to='/order'>Order</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" to='/about#reviews'>Reviews</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

        </header>

      </div>
    );
  }
}

export default Navbar;