// Import necessary libraries and components
import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Pagination from "../components/pagination";

// AstroListPage component for rendering the list of images
const AstroListPage = ({ data, pageContext }) => {
  // Extract images data from the GraphQL query result
  const images = data?.allNasaJson?.nodes || [];
  console.log(pageContext);

  return (
    <Layout pageTitle="Archives">
      <ul>
        {/* Map through images and create a list item for each image */}
        {images.map((image) => {
          return (
            <li key={image.id}>
              <Link to={"/archives/" + image.date}>
                {image.date} {image.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Add Pagination component */}
      <Pagination
        currentPage={pageContext.currentPage}
        numPages={pageContext.numPages}
        pathPrefix={pageContext.pathPrefix}
      />
    </Layout>
  );
};

// GraphQL query to fetch image data with pagination
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNasaJson(skip: $skip, limit: $limit, sort: { date: DESC }) {
      nodes {
        id
        hdurl
        explanation
        date
        copyright
        title
      }
    }
  }
`;

// Export the AstroListPage component as the default export
export default AstroListPage;

// Define the Head component for setting the page title
export const Head = () => <title>Home Page</title>;

