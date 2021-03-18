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
            <MDBNavbar color="black" fixed="top" className="p-3 py-4 mb-3 z-depth-0" dark expand="md" scrolling transparent>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center className="text-uppercase">
                  <MDBNavItem className="px-4">
                      <Link activeStyle={{ textDecoration: `line-through` }} className="nav-link" to='/'>
                        Home
                      </Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" activeStyle={{ textDecoration: `line-through` }} to="/about">About</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link className="nav-link" activeStyle={{ textDecoration: `line-through` }} to='/menu'>Menu</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link activeStyle={{ textDecoration: `line-through` }} className="nav-link" to='/contact#order'>Order</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link activeStyle={{ textDecoration: `line-through` }} className="nav-link" to='/contact'>Contact</Link>
                  </MDBNavItem>
                  <MDBNavItem className="px-4">
                    <Link activeStyle={{ textDecoration: `line-through` }} className="nav-link" to='/reviews'>Reviews</Link>
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