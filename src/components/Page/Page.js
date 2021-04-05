import React from "react";

const Page = ({ isButtonOpen, isDarkMode, children }) => {
  return (
    <body
      // style={{ height: "100vh" }}
      data-theme-mode-panel-active
      data-theme={isDarkMode ? "dark" : "light"}
      className={isButtonOpen ? "theme-mode-panel-open" : ""}
    >
      <main>
        <div className="site-wrapper overflow-hidden position-relative">
          {children}
        </div>
      </main>
    </body>
  );
};

export default Page;
