import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";

const Contact = () => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);

  const [isactive, setisactive] = useState("");

  const [
    name,
    // eslint-disable-next-line
    setname,
  ] = useState("");
  const [
    email,
    // eslint-disable-next-line
    setemail,
  ] = useState("");
  const [
    subject,
    // eslint-disable-next-line
    setsubject,
  ] = useState("");
  const [
    message,
    // eslint-disable-next-line
    setmessage,
  ] = useState("");

  const contactHandler = () => {};

  useEffect(() => {
    if (name === "" || email === "" || subject === "" || message === "") {
    } else {
      setisactive(true);
    }
  }, [name, email, subject, message]);
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

      <div className="contact-block">
        <div className="container gr-pt-lg-17 gr-pt-10 gr-pb-12">
          <div className="row">
            <div className="col-xl-5 d-flex align-items-center order-2 gr-mb-7">
              <div className="contact-widget-box d-inline-block w-100 border-radius-10 gr-p-8 gr-border-radius-10 gr-bg-blue-opacity-1 gr-ml-10">
                <div className="single-contact-widget gr-pb-9">
                  <span className="gr-text-8 d-block  font-weight-bold">
                    Email me at
                  </span>
                  <a
                    href="mailto:rodri.595@hotmail.com"
                    className="gr-text-8 font-weight-bold"
                  >
                    rodri.595@hotmail.com
                  </a>
                </div>
                <div className="single-contact-widget">
                  <span className="gr-text-8 d-block font-weight-bold">
                    Call me at
                  </span>
                  <a
                    href="tel:+50494653801"
                    className="gr-text-8 font-weight-bold"
                  >
                    +504-9465-3801
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1">
              <div className="gr-pr-lg-7 gr-pr-xl-15 gr-pb-10">
                <h2 className="gr-text-3 font-weight-bold gr-pb-5">
                  Contact now
                </h2>
                <p className="gr-text-8 gr-heading-color gr-pr-xl-1 gr-pb-2">
                  Have a project or question? Send me a message. I will reply
                  within 48 hours.
                </p>
              </div>

              <div className="folio-form">
                <input
                  name="name"
                  id="name"
                  type="text"
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Your name"
                />
                <input
                  name="email"
                  id="email"
                  type="email"
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Email address"
                />
                <input
                  name="subject"
                  id="subject"
                  type="text"
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                disabled={!isactive}
                onClick={() => contactHandler()}
                className={
                  isactive
                    ? "btn btn-primary with-icon rounded-pill pageload-link gr-mt-9 btn-hover-translate btn-hover-shadow-down"
                    : "btn btn-primary with-icon rounded-pill pageload-link gr-mt-9 "
                }
              >
                send
                <i className="icon icon-tail-right gr-text-8 font-weight-bolder"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Contact;
