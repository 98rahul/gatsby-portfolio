import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
// import { graphql } from "gatsby";

const ProjectDetail = () => {
  return (
    <Layout>
      <div className="details">
        <h1>Title</h1>
        <h1>Stack</h1>
        <div className="featured">
          {/* <GatsbyImage image={getImage()} alt="" /> */}
        </div>
        {/* <div className="html" dangerouslySetInnerHTML={{__html:html}} /> */}
      </div>
    </Layout>
  );
};

export default ProjectDetail;

// export const query =graphql`

// `