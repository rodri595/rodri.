import React from "react";

const Footer = () => {
  return (
    <footer className="gr-py-md-11 gr-pt-0 gr-pb-11">
      <div className="container">
        <div className="text-center">
          <p className="heading-small text-uppercase">
            © {new Date().getFullYear()} All RIght reseved to baleadas inc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
