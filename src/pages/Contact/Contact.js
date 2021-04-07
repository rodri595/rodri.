import React, { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";

import Swal from "sweetalert2";

import { emailContact } from "./Axios";

const Contact = () => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);

  const [isactive, setisactive] = useState("");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const contactHandler = async () => {
    try {
      if (
        !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
          email
        )
      ) {
        incomplete();
      } else {
        let contactData = await emailContact(
          name,
          email,
          subject,
          message,
          "rodri."
        );

        if (contactData.status === "SEND") {
          Swal.fire({
            icon: "success",
            title: "Thanks 💘",
            toast: true,
            position: "top",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then(() => {
            window.location.reload();
          });
        }
      }
    } catch (e) {
      console.log("♥ Still Luv u");
    }
  };

  const incomplete = () => {
    Swal.fire({
      icon: "error",
      title: "Please use a valid email 😉",
      toast: true,
      position: "top",
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      setisactive(false);
    } else {
      setisactive(true);
    }
  }, [name, email, subject, message]);

  const inputHandler = (e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    if (e.target.name === "email") {
      setemail(e.target.value);
    }
    if (e.target.name === "subject") {
      setsubject(e.target.value);
    }
    if (e.target.name === "message") {
      setmessage(e.target.value);
    }
  };
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
                  type="text"
                  onChange={(e) => inputHandler(e)}
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Your name"
                />
                <input
                  name="email"
                  type="email"
                  onChange={(e) => inputHandler(e)}
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Email address"
                />
                <input
                  name="subject"
                  type="text"
                  onChange={(e) => inputHandler(e)}
                  className={
                    isDarkMode
                      ? "form-control text-white"
                      : "form-control text-black font-weight-bold"
                  }
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  onChange={(e) => inputHandler(e)}
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
