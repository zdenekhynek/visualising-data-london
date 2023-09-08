import React from "react";
import { Link, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { format } from "date-fns";

import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./event.css";

const options = {
  // renderMark: {
  //   [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
  // },
  renderNode: {
    // [INLINES.HYPERLINK]: (node, children) => {
    //   const { uri } = node.data;
    //   return (
    //     <a href={uri} className="underline">
    //       {children}
    //     </a>
    //   );
    // },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <div class="event-section-heading">
          <h2>{children}</h2>
        </div>
      );
    },
  },
};

const EventPost = ({ data }) => {
  const {
    title,
    description,
    date,
    meetupPage,
    streamLink,
  } = data.contentfulEvent;
  console.log("data", data);
  const monthDate = format(new Date(date), "dd.MM");
  const yearDate = format(new Date(date), "yyyy");

  return (
    <Layout>
      <SEO title={title} />
      <div className="site-section event-hero">
        {/* <div className="site-hero-background" /> */}
        <div className="container">
          <h1>{title}</h1>
          <div className="h4 event-date">
            {monthDate}.{yearDate}
          </div>
        </div>
      </div>
      <div className="container">
        <div>{renderRichText(description, options)}</div>
        <div className="event-links">
          {streamLink && (
            <a href={streamLink} target="_blank">
              YouTube live stream
            </a>
          )}
          {meetupPage && (
            <a href={meetupPage} target="_blank">
              Meetup page
            </a>
          )}
          <Link to="/" className="back-link">Back to events</Link>
        </div>
      </div>
    </Layout>
  );
};
export default EventPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulEvent(slug: { eq: $slug }) {
      title
      slug
      description {
        raw
      }
      date
      meetupPage
      streamLink
    }
  }
`;
