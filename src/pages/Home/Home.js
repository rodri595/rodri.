import React, { useState } from "react";
import Avatar from "../../assets/images/avatar-rod.png";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";

const Home = () => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);

  return (
    <Page isButtonOpen={isButtonOpen} isDarkMode={isDarkMode}>
      <Switcher
        setisButtonOpen={setisButtonOpen}
        setisDarkMode={setisDarkMode}
      />
      <Header />
      <div className="hero-section">
        <div className="hero-pattern absolute-top gr-abs-top w-100 z-index-n1">
          {/* <img src="" className="w-100 gr-opacity-1" alt="background" /> */}
        </div>
        <div className="container">
          <div className="row justify-content-center gr-pt-lg-15 gr-pb-lg-15 gr-pt-10 gr-pb-7">
            <div className="col-lg-10">
              <div className="hero-content text-center">
                <span className=" gr-mb-8 gr-bg-pink rounded-pill">
                  {/* <i className="icon icon-code-2 gr-text-5 font-weight-bolder"></i> */}
                  <img
                    src={Avatar}
                    style={{ width: "100px" }}
                    className="icon font-weight-bolder"
                  />
                </span>
                <h2 className="gr-text-1 font-weight-bold">
                  Rodrigo Andree Erazo
                </h2>
                <span className="gr-text-7 gr-pt-5 gr-pb-7 d-inline-block">
                  I create meaningful solutions for your brands and products.
                  <br />
                  Give your customers the best experience possible.
                </span>
                <div className="gr-pt-3">
                  <a
                    href="/"
                    className="btn btn-primary rounded-pill pageload-link btn-hover-translate btn-hover-shadow-down goto btn-shadow"
                  >
                    Check latest works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gr-bg-folio-pattern">
        <div className="gr-pt-lg-17 gr-pb-lg-13 gr-pt-9 gr-pb-9">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11 text-center">
                <span className="bullet-text bullet-color-green gr-text-12 font-weight-bold text-uppercase gr-pb-8 d-inline-block">
                  Available for Freelance Projects
                </span>
                <h2 className="gr-text-2 font-weight-bold gr-px-xl-7 gr-pb-10">
                  Give your product a shape
                </h2>
                <a
                  href="/contact"
                  className="btn btn-secondary with-icon rounded-pill pageload-link btn-hover-translate btn-hover-shadow-down goto btn-shadow contact-modal-trigger"
                >
                  <i className="icon icon-chat-round-2 gr-text-8 gr-pr-5 font-weight-bolder" />
                  Let's Talk Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Page>
  );
};

export default Home;
