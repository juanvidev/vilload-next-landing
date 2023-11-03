import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const Layout = ({ children }) => {

  return (
    <>
      <ReactLenis options={{
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }} root>

        <Header />
        {children}
        <Footer />

      </ReactLenis>
    </>
  );
};

export default Layout;
