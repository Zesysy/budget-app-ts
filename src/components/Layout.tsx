import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
