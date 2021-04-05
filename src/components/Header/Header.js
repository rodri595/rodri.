import React from "react";
import logoRodWhite from "../../assets/images/rodlogo-white.png";
import logoRodDark from "../../assets/images/rodlogo-dark.png";
const Header = () => {
  return (
    <header className="site-header site-header-menu--right">
      <div className="container-fluid pr-lg--30 pl-lg--30">
        <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
          <div className="brand-logo">
            <a href="/">
              {/* <img src={logoRodWhite} alt="Rodrigo Brand"></img>
              <img src={logoRodDark} alt="Rodrigo Brand"></img> */}
              <h2 className="gr-text-6 font-weight-bolder">rodri.</h2>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="mobile-menu">
            <div className="navbar-nav mr--10">
              <ul className="navbar-nav main-menu">
                <li className="nav-item">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 "
                    href="/about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 "
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    support
                  </a>
                  <ul className="menu-dropdown dropdown-menu">
                    <li className="drop-menu-item">
                      <a href="/"> legal </a>
                    </li>
                    <li className="drop-menu-item">
                      <a href="/">Pricing</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <button
              className="d-block d-lg-none offcanvas-btn-close"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <i className="gr-cross-icon"></i>
            </button>
          </div>
          <button
            className="navbar-toggler btn-close-off-canvas hamburger-icon border-0"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger hamburger--squeeze js-hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
