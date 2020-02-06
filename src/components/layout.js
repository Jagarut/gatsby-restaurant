import Navbar from "../components/globals/navbar"
import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/globals/Footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
