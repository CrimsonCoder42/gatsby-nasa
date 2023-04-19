// Import necessary libraries and components
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AstroMedia from "../components/astro-media";

// Define the IndexPage component
const IndexPage = ({ data }) => {
  // Extract the APOD (Astronomy Picture of the Day) data
  const apod = data.allNasaJson.nodes[0];

  // Render the component
  return (
    <Layout pageTitle="Astronomy Picture of the Day">
      <h3>
        {apod.display_date}: {apod.title}
      </h3>
      <AstroMedia data={apod}></AstroMedia>
    </Layout>
  );
};

// Define the GraphQL query to fetch the data
export const query = graphql`
  query IndexQuery {
    allNasaJson(limit: 1, sort: { date: DESC }) {
      nodes {
        id
        hdurl
        url
        explanation
        date
        display_date: date(formatString: "MMMM Do, YYYY")
        copyright
        media_type
        title
      }
    }
  }
`;

// Export the IndexPage component as the default export
export default IndexPage;

// Define the Head component for setting the page title
export const Head = () => <title>Home Page</title>;

