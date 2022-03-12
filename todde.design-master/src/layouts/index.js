import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Layout({ children }) {
   return (
      <div className="w-11/12 mx-auto mx-auto max-w-screen-2xl bg-fixed bg-ImageBg bg-auto md:bg-contain bg-center relative">
         <span className="bg-dark absolute inset-0" style={{ opacity: "100%" }}></span>

         <Navigation />

         <main className="mx-auto">{children}</main>

         <Footer />
      </div>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
