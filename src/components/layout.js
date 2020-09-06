// import {Client as Styletron} from 'styletron-engine-atomic';
// import {Provider as StyletronProvider} from 'styletron-react';
// import {LightTheme, BaseProvider} from 'baseui';

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from './Navbar';

const Layout = ({ children }) => {
  // const engine = new Styletron();

  return (
    <>
      <>
        <Navbar/>
          <main>{children}</main>
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
