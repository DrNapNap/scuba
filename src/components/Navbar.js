import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../ScubaLiving_logo_small.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light stick-top">
      <div className="container-fluid col-10 col-lg-11">
        <a className="navbar-brand" href="#/"><img alt="logo" className="min" src={logo} /></a>
        <button id="nevet" title="toggler" className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row" id="navbarResponsive">
          <ul className="navbar-nav mr-auto col-12 col-lg-6">
            <li className="nav-item active">
              <Link to="/" className="nav-link p-2">HOME</Link>
            </li>
            <li className="nav-item active">
              <Link to="/Produkter" className="nav-link p-2">DYKKERUDSTYR</Link>
            </li>
            <li className="nav-item active">
              <Link to="/Rejser" className="nav-link p-2">DYKKERREJSER</Link>
            </li>
            <li className="nav-item active">
              <Link to="/Kurser" className="nav-link p-2">DYKKERKURSER</Link>
            </li>
            <li className="nav-item active">
              <Link to="/Kontakt" className="nav-link p-2">KONTAKT</Link>
            </li>

            <li className="nav-item active">
              <Link to="/Omso" className="nav-link p-2">OM OS</Link>
            </li>
          </ul>

          <div className="col-12 col-lg-4 ">
            <label htmlFor="SØG">
              <input className="col-5 col-lg-7 p-1 col123 border-0 col-2"/>

              
              <button className="p-1 ">SØG</button></label>
          </div><div className="row flex-nowrap">
            <i className="fas fa-lock m-auto black"></i>


            <Link to="/Login" className="btn li1">LOGIN</Link>



          </div>
        </div>

      </div>

    </nav>
  )

}

export default Navbar