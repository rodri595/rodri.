import React from "react";

const Page = ({ isButtonOpen, isDarkMode, navbar, children, footer }) => {
  return (
    <body
      data-theme={isDarkMode ? "dark" : "light"}
      className={isButtonOpen ? "theme-mode-panel-open" : ""}
    >
      {navbar}
      <main>
        <div className="overflow-hidden position-relative newHeight">
          {children}
        </div>
      </main>
      {footer}
    </body>
  );
};

export default Page;
