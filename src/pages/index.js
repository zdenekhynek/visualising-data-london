import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import "../fonts/icomoon/style.css"
import "../css/bootstrap.min.css";
import "../css/magnific-popup.css";
// import "../css/jquery-ui.css";
// import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/bootstrap-datepicker.css";
import "../fonts/flaticon/font/flaticon.css";
import "../css/aos.css";
import "../css/style.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <div className="home-image">
        <Image />
      </div>
      <div className="home-content">
        <h1>Visualising Data London</h1>
        <h2>The dataviz meetup</h2>
      </div>
    </div>
  </Layout>
);
export default IndexPage;