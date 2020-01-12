import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import "./index.css";

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