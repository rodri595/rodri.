import React, { useState } from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";
import Love from "../../assets/images/iloveyou.svg";

import rodSigWhite from "../../assets/images/rodSigWhite.svg";
import rodSigDark from "../../assets/images/rodSigDark.svg";

const About = () => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);
  return (
    <Page
      isButtonOpen={isButtonOpen}
      isDarkMode={isDarkMode}
      navbar={<Header />}
      footer={<Footer />}
    >
      <Switcher
        setisButtonOpen={setisButtonOpen}
        setisDarkMode={setisDarkMode}
      />

      <div className="portfolio-about-block">
        <div className="container gr-pt-lg-17 gr-pt-10 gr-pb-17">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-3  gr-pb-8 gr-pb-lg-0 ">
              <div className="portfolio-about-image">
                <img
                  src={Love}
                  style={{
                    height: "500px",
                  }}
                  alt="rods avatar"
                  className="w-100 "
                  // image-box-shadow
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1 col-md-6 col-sm-9 ">
              <div className="portfolio-about-text">
                <h2 className="gr-text-3 font-weight-bold gr-pb-8">
                  Rodrigo Andree Erazo Aleman
                </h2>
                <p className="gr-heading-color gr-pb-5">
                  Fullstack Developer based in Tegucigalpa, Honduras. I develop
                  with a minimal and beautiful design in mind.
                </p>
                <p className="gr-heading-color gr-pb-5">
                  Reactjs + Leafletjs + Cartographer + DBA
                </p>
                <div className="contact-block gr-pb-6">
                  <span className="gr-text-8 d-block gr-text-color">
                    Email me at
                  </span>
                  <a
                    href="mailto:rodrigo@magistralem.com"
                    className="gr-text-8 font-weight-bold gr-text-color link-hover-light"
                  >
                    rodrigo@magistralem.com
                  </a>
                </div>
                <div className="signature-block  gr-pb-5">
                  <img
                    src={isDarkMode ? rodSigDark : rodSigWhite}
                    alt="rod's sig"
                    style={{ height: "70px" }}
                    className="img-fluid"
                  />
                </div>
                <h4 className="d-block gr-text-8 gr-heading-color">
                  Rodrigo Andree Erazo Aleman
                </h4>
                <p className="d-block gr-text-8 gr-heading-color">
                  Founder of{" "}
                  <a
                    href="https://www.magistralem.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Magistralem
                  </a>
                </p>
                <div className="social-links gr-pt-9">
                  <a
                    href="https://api.whatsapp.com/send/?phone=50494653801"
                    target="_blank"
                    rel="noreferrer"
                    className=" gr-text-color gr-text-12 font-weight-bold gr-mr-8 letter-spacings-1 link-hover-rotate  text-uppercase"
                  >
                    whatsapp
                  </a>
                  <a
                    href="https://twitter.com/ErazoAndree"
                    target="_blank"
                    rel="noreferrer"
                    className=" gr-text-color gr-text-12 font-weight-bold gr-mr-8 letter-spacings-1 link-hover-rotate  text-uppercase"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.fiverr.com/rodrigo595"
                    target="_blank"
                    rel="noreferrer"
                    className="gr-text-color gr-text-12 font-weight-bold gr-mr-8 letter-spacings-1 link-hover-rotate  text-uppercase"
                  >
                    Fiverr
                  </a>
                  <a
                    href="https://www.instagram.com/rodri595/"
                    target="_blank"
                    rel="noreferrer"
                    className="gr-text-color gr-text-12 font-weight-bold letter-spacings-1 link-hover-rotate  text-uppercase"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default About;
