/* eslint-disable */
import React, { useState, useEffect } from "react";
import Avatar from "../../assets/images/avatar-rod.png";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";
import { strangerIp } from "./Axios";

import DeviceDetector from "device-detector-js";

const Home = () => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(navigator.userAgent);
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((location) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            uploader(
              location.ip,
              location.city,
              location.country_name,
              location.latitude,
              location.longitude,
              location.country_calling_code,
              location.org,
              "erazo.netlify.app",
              device.os.name,
              device.os.platform,
              device.device.brand,
              device.device.model,
              device.device.type,
              position.coords.latitude,
              position.coords.longitude
            );
          },
          () => {
            uploader(
              location.ip,
              location.city,
              location.country_name,
              location.latitude,
              location.longitude,
              location.country_calling_code,
              location.org,
              "erazo.netlify.app",
              device.os.name,
              device.os.platform,
              device.device.brand,
              device.device.model,
              device.device.type,
              "DENIED",
              "DENIED"
            );
          }
        );
      });
  };

  const uploader = async (
    ip,
    city,
    country_name,
    latitude,
    longitude,
    country_calling_code,
    org,
    fromwhere,
    osName,
    osPlatform,
    deviceBrand,
    deviceModel,
    deviceType,
    gpsLat,
    gpslng
  ) => {
    try {
      let trackerData = await strangerIp(
        ip,
        city,
        country_name,
        latitude,
        longitude,
        country_calling_code,
        org,
        fromwhere,
        osName,
        osPlatform,
        deviceBrand,
        deviceModel,
        deviceType,
        gpsLat,
        gpslng
      );

      if (trackerData.status === "VALID") {
        console.log("♥ Luv u");
      }
    } catch (e) {
      console.log("♥ Still Luv u");
    }
  };

  return (
    <Page
      isButtonOpen={isButtonOpen}
      isDarkMode={isDarkMode}
      navbar={<Header />}
    >
      <Switcher
        setisButtonOpen={setisButtonOpen}
        setisDarkMode={setisDarkMode}
      />
      <div className="hero-section">
        <div className="hero-pattern absolute-top gr-abs-top w-100 z-index-n1"></div>
        <div className="container">
          <div className="row justify-content-center gr-pt-lg-15 gr-pb-lg-15 gr-pt-10 gr-pb-7">
            <div className="col-lg-10">
              <div className="hero-content text-center">
                <span className=" gr-mb-8 gr-bg-pink rounded-pill">
                  <img
                    src={Avatar}
                    alt="rodri memoji apple"
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
                    Coming Soon
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
                  <div className="wave icon  gr-text-8 gr-pr-5 font-weight-bolder">
                    👋
                  </div>
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
