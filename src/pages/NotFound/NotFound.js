/* eslint-disable */

import React, { useState } from "react";
import Invite from "../../assets/images/invite.png";
import UIfx from "uifx";
import veridis from "../../assets/audio/quo.mp3";
import Swal from "sweetalert2";

import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";

const audioSong = new UIfx(veridis);
const NotFound = () => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);
  const [isPlayer, setisPlayer] = useState(0);

  const audioInit = () => {
    if (isPlayer === 0) {
      setisPlayer((prev) => prev + 1);
      audioSong.setVolume(1).play();
      Swal.fire({
        html:
          '<div class="recent-track"><div class="recent-track__icon"><span></span><span></span><span></span><span></span></div><div class="recent-track__body js-track">🎵Veridis Quo - <strong>Daft Punk</strong> 🎵</div></div>',
        toast: true,
        position: "top",
        timer: 3000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div onClick={() => (isPlayer === 0 ? audioInit() : console.log("now"))}>
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
              <img
                src={Invite}
                style={{ width: "300px" }}
                alt="invite letter"
              />
              <h1>Seem Lost?</h1>
              <p>
                Ops! It seems like you are lost 🌟
                <br /> Please click anywhere or on the safe zone 😊
              </p>
              {isPlayer === 0 ? (
                ""
              ) : (
                <div className="gr-pt-3">
                  <a
                    href="/"
                    className="btn btn-primary rounded-pill pageload-link btn-hover-translate btn-hover-shadow-down goto btn-shadow"
                  >
                    safe zone
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};
export default NotFound;
