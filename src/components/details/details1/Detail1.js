import React from "react";
import Mapa from "../../mapa/Mapa";
import "../../../assets/css/video.css";

const Detail1 = ({ data }) => {
  return (
    <div>
      <div className="banner-block">
        <div className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
          <div className="protfolio-image">
            {data.imgFolder === undefined ? (
              <img alt="Product Rodrigo" className="w-100" />
            ) : (
              <img
                src={
                  require(`../../../assets/images/${data.imgFolder}/1.png`)
                    .default
                }
                alt="Product Rodrigo"
                className="w-100"
              />
            )}
          </div>
        </div>
      </div>
      <div className="portfolio-details-block gr-pt-10 gr-pt-md-17 gr-pb-lg-14 gr-pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10 col-md-12">
              <div className="texts gr-pr-xl-13">
                <span className="d-block text-uppercase gr-text-12 font-weight-bold gr-pb-6 gr-heading-color-opacity">
                  {data.option}
                </span>
                <h2 className="gr-text-3 font-weight-bold gr-pb-6">
                  {data.title}
                </h2>
                <p className="gr-text-9 gr-text-color-opacity">
                  {data.description}
                </p>
              </div>
              <div className="row gr-pt-12">
                <div className="col-sm-6 col-md-3 gr-pb-7">
                  <div>
                    <span className="d-block gr-text-12 font-weight-bold text-uppercase gr-pb-3 gr-heading-color-opacity">
                      Client
                    </span>
                    <h3 className="h3">{data.client}</h3>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-xl-5 d-flex justify-content-lg-center gr-pb-7">
                  <div>
                    <span className="d-block gr-text-12 font-weight-bold text-uppercase gr-pb-3 gr-heading-color-opacity">
                      Time
                    </span>
                    <h3 className="h3">{data.time}</h3>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-4 d-flex justify-content-lg-end align-items-end gr-pb-7">
                  <div>
                    <a
                      href={`${data.web}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary rounded-pill with-icon btn-hover-translate btn-hover-shadow-down"
                    >
                      Live work <i className="icon icon-tail-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-images">
        <div className="container">
          <div className="row gr-pb-md-16 gr-pb-10">
            <div className="col-lg-12 gr-pb-md-9">
              <figure>
                {data.imgFolder === undefined ? (
                  <img alt="Product Rodrigo detail 2" className="w-100" />
                ) : (
                  <img
                    src={
                      require(`../../../assets/images/${data.imgFolder}/2.png`)
                        .default
                    }
                    alt="Product Rodrigo"
                    className="w-100"
                  />
                )}
              </figure>
            </div>
            <div className="col-lg-12 gr-pb-md-9">
              <figure>
                {data.imgFolder === undefined ? (
                  <img alt="Product Rodrigo detail 2" className="w-100" />
                ) : (
                  <img
                    src={
                      require(`../../../assets/images/${data.imgFolder}/3.png`)
                        .default
                    }
                    alt="Product Rodrigo"
                    className="w-100"
                  />
                )}
              </figure>
            </div>
            <div className="col-sm-6">
              <figure className="gr-pr-md-4">
                {data.imgFolder === undefined ? (
                  <img alt="Product Rodrigo detail 2" className="w-100" />
                ) : (
                  <img
                    src={
                      require(`../../../assets/images/${data.imgFolder}/4.png`)
                        .default
                    }
                    alt="Product Rodrigo"
                    className="w-100"
                  />
                )}
              </figure>
            </div>
            <div className="col-sm-6">
              <figure className="gr-pl-md-4">
                {data.imgFolder === undefined ? (
                  <img alt="Product Rodrigo detail 2" className="w-100" />
                ) : (
                  <img
                    src={
                      require(`../../../assets/images/${data.imgFolder}/5.png`)
                        .default
                    }
                    alt="Product Rodrigo"
                    className="w-100"
                  />
                )}
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-details-features gr-pb-md-12 gr-pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="gr-text-3 gr-mb-12">Key Findings</h2>
            </div>
            <div className="col-lg-6 gr-mb-10">
              <h3 className="gr-mb-7 font-weight-bold">01. Basics</h3>
              <p className="gr-text-9 gr-text-color-opacity">
                To satisfy our goal of creating a brand that could adapt across
                many use cases, we took the base form of their new logo and used
                it as an artboard. As long as the structural outline of the mark
                stayed consistent their brand was allowed to flex and adapt to
                specific uses.
              </p>
            </div>
            <div className="col-lg-6 gr-mb-10">
              <h3 className="gr-mb-7 font-weight-bold">02. Goals</h3>
              <p className="gr-text-9 gr-text-color-opacity">
                To satisfy our goal of creating a brand that could adapt across
                many use cases, we took the base form of their new logo and used
                it as an artboard.
              </p>
            </div>
            <div className="col-lg-6 gr-mb-10">
              <h3 className="gr-mb-7 font-weight-bold">03. Problems</h3>
              <p className="gr-text-9 gr-text-color-opacity">
                To satisfy our goal of creating a brand that could adapt across
                many use cases, we took the base form of their new logo and used
                it as an artboard. As long as the structural outline of the mark
                stayed consistent their brand was allowed to flex and adapt to
                specific uses.
              </p>
            </div>
            <div className="col-lg-6 gr-mb-10">
              <h3 className="gr-mb-7 font-weight-bold">04. Solutions</h3>
              <p className="gr-text-9 gr-text-color-opacity">
                To satisfy our goal of creating a brand that could adapt across
                many use cases, we took the base form of their new logo and used
                it as an artboard. As long as the structural outline of the mark
                stayed consistent their brand was allowed to flex and adapt to
                specific uses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="half-theme-gray-4-bg gr-pb-md-15 gr-pb-10 gr-pt-md-0 gr-pt-10">
        <div className="container">
          <figure className="gr-mb-md-10">
            <Mapa coordenadas={data.coords} sourceLogo={data.imgFolder} />
          </figure>
          <figure className="gr-mb-md-10 text-center">
            {data.imgFolder === undefined ? (
              <img alt="Product Rodrigo detail 2" />
            ) : (
              <img
                src={
                  require(`../../../assets/images/${data.imgFolder}/logo.png`)
                    .default
                }
                alt="Product Rodrigo"
                // className="w-100"
                style={{ width: "100px" }}
              />
            )}
          </figure>
          <div className="row gr-pb-md-16 gr-pb-10">
            <div className="col-lg-12 gr-pb-md-9">
              <div className="wrapper">
                <input type="checkbox" />
                <div className="video">
                  {data.imgFolder === undefined ? (
                    ""
                  ) : (
                    <video
                      src={
                        require(`../../../assets/images/${data.imgFolder}/demo.mp4`)
                          .default
                      }
                      loop
                      autoPlay
                      muted
                    />
                  )}
                </div>
                <div className="font-weight-bold  text">
                  <span data-text="Sneak Peek 🔎"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gr-pt-md-9">
            <div className="col-xl-2 col-lg-3">
              <div className="more-link dark-bg-text">
                <p className="mb-0 text-center">
                  <span className="d-block gr-text-12 font-weight-bold gr-heading-color-opacity text-uppercase letter-spacings-1 gr-pb-1">
                    Next Project
                  </span>
                  <a
                    href={`${data.next}`}
                    rel="noreferrer"
                    className="gr-heading-color font-weight-bold d-inline-flex align-items-center btn-link-hover with-icon gr-text-5"
                  >
                    {data.next}
                    <i className="icon icon-tail-right ml-3 gr-text-6"></i>
                  </a>
                </p>
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
                <h2 className="gr-text-3 font-weight-bold gr-px-xl-7">
                  I am taking new projects. Waiting to hearing about new
                  projects, so if you'd like to chat please get in touch.
                </h2>
                <ul className="llinks-inline d-flex flex-wrap justify-content-center gr-pt-md-11 gr-pt-10 pl-0">
                  <li className="text-uppercase border-right-sm font-weight-bold gr-text-12 letter-spacing-1_63">
                    <a
                      href
                      className="gr-px-7 d-inline-block btn-hover-translate"
                    >
                      <span>rodrigo@magistralem.com</span>
                    </a>
                  </li>
                  <li className="text-uppercase font-weight-bold gr-text-12 letter-spacing-1_63">
                    <a
                      href
                      className="gr-px-7 d-inline-block btn-hover-translate"
                    >
                      <span>github.com/rodri595</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /end */}
    </div>
  );
};

export default Detail1;
