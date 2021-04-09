/* eslint-disable */

import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Switcher from "../../components/Switcher/Switcher";
import Detail1 from "../../components/details/details1/Detail1";
// import Detail2 from "../../components/details/details2/Detail2";

import Products from "./data.json";

const DetailPage = ({ match }) => {
  const [isButtonOpen, setisButtonOpen] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(false);
  const [isdetailData, setisdetailData] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    Products.map((o) => {
      if (o.productRod === match.params.product) {
        setisdetailData(o.info);
      }
    });
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

      <Detail1 data={isdetailData} />
    </Page>
  );
};

export default DetailPage;
