import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Profile from "../components/Profile";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import MySkills from "../components/MySkills";
import { ContactMe } from "../components/ContactMe";
import RightSidebar from "../components/RightSidebar";

export default function Home(props) {
  console.log(props);
  // const { title, description } = props.data.site.siteMetadata;
  const { site, file } = props.data;
  // const image = getImage(file);
  return (
    <Layout>
      <div className={styles.profile}>
        <Profile />
        {/* <Link className={styles.btn} to="/project">
            My Portfolio Projects
          </Link> */}
      </div>
      <section className={styles.header}>
        <div></div>
        {/* <img src="/banner.png" alt="banner" style={{ maxWidth: "100%" }} /> */}
        <div className={styles.completePage}>
          <Introduction />
          <AboutMe />
          <Services />
          <MySkills />
          <ContactMe />
        </div>
        <div></div>
        {/* <GatsbyImage image={getImage(file)} alt="heoo" /> */}
        {/* <p>
          {site.siteMetadata.title}-{site.siteMetadata.description}
        </p> */}
      </section>
      <RightSidebar />
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

    file(relativePath: { eq: "banner.png" }) {
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
