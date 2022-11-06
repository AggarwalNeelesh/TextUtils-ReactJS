import React from 'react'
import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"href="#">{props.home}</a>
              {/* <Link className="nav-link active" aria-current="page"to="/">{props.home}</Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link " aria-current="page" to="/about">
                {props.about}
              </Link> */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          {/* <div className="btn-toolbar mx-2" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" onClick={props.changeTheme("0")} style={{background : "white", color:"black"}} className="btn btn-secondary">0</button>
              <button type="button" onClick={props.changeTheme("1")} style={{background : "#0f1876"}} className="btn btn-secondary">1</button>
              <button type="button" onClick={props.changeTheme("2")} style={{background : "#1fb604"}} className="btn btn-secondary">2</button>
              <button type="button" onClick={props.changeTheme("3")} style={{background : "#920895"}} className="btn btn-secondary">3</button>
              <button type="button" onClick={props.changeTheme("4")} style={{background : "#6f09a7"}} className="btn btn-secondary">4</button>
            </div>
          </div> */}
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired, 
  home: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string
}
Navbar.defaultProps = {
  title: 'TextUtility',
  home: "Homie",
  about: "About Us",
  mode: "light"
}