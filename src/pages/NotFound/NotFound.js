import React, { useState } from "react";
import Invite from "../../assets/images/invite.png";

import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";

const NotFound = () => {
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
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-7">
            <img src={Invite} style={{ width: "300px" }} alt="invite letter" />
            <h1>404 Error</h1>
            <p>
              Ops! It seems like the page you are looking for is not available!
              Please try again with another page or go back to home.
            </p>
            <div className="gr-pt-3">
              <a
                href="/"
                className="btn btn-primary rounded-pill pageload-link btn-hover-translate btn-hover-shadow-down goto btn-shadow"
              >
                safe zone
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default NotFound;
