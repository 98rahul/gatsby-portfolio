import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Profile from "../components/Profile";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Services from "../components/MyServices";
import MySkills from "../components/MySkills";
import { ContactMe } from "../components/ContactMe";
import RightSidebar from "../components/RightSidebar";
import { ThemeProvider } from "../store/ThemeContext";

export default function Home(props) {
  const [theme, setTheme] = useState('dark'); //'dark' || 'light'
  const switchTheme = (bool) => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
    // setTheme(bool);
  };


  console.log("switch", theme);
  console.log(props);
  // const { title, description } = props.data.site.siteMetadata;
  const { site, file } = props.data;
  // const image = getImage(file);
  return (
    <ThemeProvider>
    <Layout theme={theme} switchTheme={switchTheme}>
        <div className={styles.main_container}>
          <div className={styles.profile_box}>
            <Profile />
          </div>
          <section className={styles.content_box}>
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
       </div>
    </Layout>

    </ThemeProvider>
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
