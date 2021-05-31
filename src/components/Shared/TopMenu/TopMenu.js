import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopMenu.scss";

const TopMenu = () => {
  const [languages, setLanguages] = useState("ENG");
  const [currency, setCurrency] = useState("USD");
  const handelLanguage = (e) => {
    const languageName = e.target.innerText;
    setLanguages(languageName);
  };
  const handelCurrency = (e) => {
    const currencyName = e.target.innerText;
    setCurrency(currencyName);
  };
  return (
    <section className="top-menu">
      <div className="container">
        <nav className="navbar navbar-expand navbar-light">
          <div className="container-fluid">
            <div className="language-style">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <small>{languages}</small>
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link
                        onClick={handelLanguage}
                        value="ENG"
                        className="dropdown-item"
                        to="#"
                      >
                        ENG
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handelLanguage}
                        value="BAN"
                        className="dropdown-item"
                        to="#"
                      >
                        BAN
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="currency-style">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <small>{currency}</small>
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link
                        onClick={handelCurrency}
                        className="dropdown-item"
                        to="#"
                      >
                        USD
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handelCurrency}
                        className="dropdown-item"
                        to="#"
                      >
                        BDT
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse d-flex justify-content-end align-items-center">
              <div className="navbar-nav">
                <small className="ms-2 text-white d-flex align-items-center">
                  Welcome to Nayem!
                </small>
                <Link className="nav-link ms-2 text-white d-none d-lg-block" to="#">
                  <small>My Account</small>
                </Link>
                <Link className="nav-link ms-2 text-white d-none d-lg-block" to="#">
                  <small>Contact Us</small>
                </Link>
                <Link className="nav-link ms-2 text-white d-none d-lg-block" to="#">
                  <small>My Wishlist</small>
                </Link>
                <Link className="nav-link ms-2 text-white d-none d-lg-block" to="#">
                  <small>Site Map</small>
                </Link>
                <Link className="nav-link ms-2 text-white d-none d-lg-block" to="#">
                  <small>Cart</small>
                </Link>
                <Link className="nav-link ms-2 text-white d-none d-lg-block" to="#">
                  <small>Login</small>
                </Link>
                <span className="ms-3 text-white d-flex align-items-center"> | </span>
                <Link className="nav-link ms-2 text-white" to="#">
                  <small><FontAwesomeIcon icon={faFacebook} /></small>
                </Link>
                <Link className="nav-link ms-2 text-white" to="#">
                  <small><FontAwesomeIcon icon={faTwitter} /></small>
                </Link>
                <Link className="nav-link ms-2 text-white" to="#">
                  <small><FontAwesomeIcon icon={faInstagram} /></small>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TopMenu;
