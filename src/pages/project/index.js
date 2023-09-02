import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/project.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Project = (props) => {
  console.log("props", props);
  const { nodes: project } = props.data.allMarkdownRemark;
  console.log(project);
  const [theme, setTheme] = useState(false);
  const switchTheme = (bool) => {
    setTheme(bool);
  };
  return (
    <Layout theme={theme} switchTheme={switchTheme}>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {project.map((item, id) => {
            return (
              // <Link to={`/projects/${item.frontmatter.slug}`} key={item.id}>
              <Link to={"/project/" + item.frontmatter.slug} key={item.id}>
                <div>
                  <GatsbyImage image={getImage(item.frontmatter.thumb)}/>
                  <h2>{item.frontmatter.title}</h2>
                  <p>{item.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Project;

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData
          }
          id
        }
      }
    }
  }
}
`;
