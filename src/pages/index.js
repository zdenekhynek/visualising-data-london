import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import Event from "../components/event";
import SEO from "../components/seo";

import "../fonts/icomoon/style.css";
import "../css/bootstrap.min.css";
import "../css/magnific-popup.css";
import "../css/jquery-ui.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.min.css";
import "../css/bootstrap-datepicker.css";
import "../fonts/flaticon/font/flaticon.css";
import "../css/aos.css";
import "../css/style.css";

const IndexPage = ({ data }) => {
  const events = data.allContentfulEvent.edges;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="site-section site-hero">
        <div className="site-hero-background" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span
                className="d-block mb-3 caption aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              ></span>
              <h1
                className="d-block mb-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Visualising Data London
              </h1>
              <span
                className="d-block mb-5 caption aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Information design meetup
              </span>
              {/* <a
                href="#"
                className="btn-custom aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span>Buy Tickets</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div id="events" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="site-section-heading">
                <h2>Events</h2>
              </div>
            </div>
            <div
              className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>Meetups are organised semiregularly in Central London, UK.</p>
            </div>
          </div>

          <div className="row align-items-stretch program">
            {events.map(({ node: post }) => (
              <Event data={post} />
            ))}
          </div>
        </div>
      </div>
      <div id="participate" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="site-section-heading">
                <h2>Participate</h2>
              </div>
            </div>
            <div
              className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Would you like to be a speaker at one of our next events? Great!
                Please let us know all about you and your talk{" "}
                <a href="https://forms.gle/gSL5iGwiiKSsuG1A8" target="_blank">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="support" className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="site-section-heading">
                <h2>Support</h2>
              </div>
            </div>
            <div
              className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p>
                Our meetup is looking for a new sponsor to help cover the cost
                of our events. If you have a suggestion for potential
                supporters, please reach out to zdenek.hynek@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulEvent(sort: { date: DESC }) {
      edges {
        node {
          id
          title
          date
          meetupPage
          slug
        }
      }
    }
  }
`;
