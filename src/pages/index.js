import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home(props) {
  console.log(props);
  // const { title, description } = props.data.site.siteMetadata;
  const { site, file } = props.data;
  // const image = getImage(file);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/project">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="banner" style={{ maxWidth: "100%" }} /> */}
        <GatsbyImage image={getImage(file)} alt="heoo" />
        <p>
          {site.siteMetadata.title}-{site.siteMetadata.description}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }

    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.36, placeholder: BLURRED)
        id
      }
    }
  }
`;

// export const Imgquery=graphql`
// query ImageQuery {
//   file(relativePath: {eq: "banner.png"}) {
//     childImageSharp {
//       id
//       fluid {
//         sizes
//         src
//         srcSet
//       }
//     }
//   }
// }
// `;
