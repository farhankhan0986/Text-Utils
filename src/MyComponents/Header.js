import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export const Header = (props) => {
  let style ={
    cursor: "pointer"
  }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand " to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link  " aria-current="page" to="/about">About</Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <input onClick={props.toggleMode} className="form-check-input mx-1" style={style} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Enable { `${props.mode==='light' ? 'Dark' : 'Light'}`}Mode</label>
            </div>
            </div>
          </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: "Your Title Here"
};