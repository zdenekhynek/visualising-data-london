/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono"
          rel="stylesheet"
        />
      </Helmet>
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#participate">Participate</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <header className="site-navbar py-3" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-11 col-xl-2">
                {/* <h1 className="mb-0">
                  <a href="index.html" className="text-white h2 mb-0">
                    Work<span className="text-primary">shop</span>{" "}
                  </a>
                </h1> */}
              </div>
              <div className="col-12 col-md-10 d-none d-xl-block">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li>
                      <a href="#events">Events</a>
                    </li>
                    <li>
                      <a href="#participate">Participate</a>
                    </li>
                    <li>
                      <a href="#support">Support</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style={{ position: "relative", top: "3px" }}
              >
                <a
                  href="#"
                  className="site-menu-toggle js-menu-toggle text-white"
                >
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="site-section site-hero">
        <div className="site-hero-background" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span
                className="d-block mb-3 caption aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                
              </span>
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
                Data-design meetup
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
              <p>
                Meetups are organised every 3 months and hosted in the heart of Shoreditch, London, UK.
              </p>
            </div>
          </div>

          <div className="row align-items-stretch program">
            {children}
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
            <div className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <p>
                Would you like to be a speaker at one of our next events? Great! Please let us 
                know all about you and your talk <a href="https://forms.gle/gSL5iGwiiKSsuG1A8" target="_blank">here</a>.
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
            <div className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <p>
                Our meetup is looking for a new sponsor to help cover the cost of our events.
                If you have a suggestion for potential supporters, please reach out to info@visualisingdata.london.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <footer id="about" className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                For any questions, thoughts or suggestions, please contact info@visualisingdata.london.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Helmet>
        <script defer src={"/js/jquery-3.3.1.min.js"} type="text/javascript" />
        <script defer src={"/js/jquery-migrate-3.0.1.min.js"} type="text/javascript" />
        <script defer src={"/js/bootstrap.min.js"} type="text/javascript" />
        <script defer src={"/js/aos.js"} type="text/javascript" />
        <script defer src={"/js/main.js"} type="text/javascript" />
      </Helmet>
    </>
    // <>
    //   <Header siteTitle={data.site.siteMetadata.title} />
    //   <div>
    //     <main>{children}</main>
    //     <footer>

    //     </footer>
    //   </div>
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
