import styles from "../styles/Home.module.css";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import Contact from "../components/contact/contact";
import Education from "../components/education/education";
import Navbar from "../components/navbar/navbar";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Ref, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";

type page = {
  background: string;
  Content: () => JSX.Element;
};

export default function Home() {
  // useEffect(async () => {
  //   const url = `https://api.linkedin.com/v2/people?q=vanityName&vanityName=${process.env.NEXT_PUBLIC_LINKEDIN_VANITY_NAME}`;
  //   const fetchData = () =>
  //     axios.get(url, {
  //       headers: {
  //         access_token: `${process.env.NEXT_PUBLIC_LINKEDIN_ACCESS_TOKEN}`,
  //       },
  //     });
  //   try {
  //     const data = await fetchData();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // });
  const ref: Ref<IParallax> = useRef() as Ref<IParallax>;
  const pages: page[] = [
    { background: "linkedin.svg", Content: About },
    { background: "bsmch.svg", Content: Education },
    { background: "aman.png", Content: Experience },
    { background: "github.svg", Content: Skills },
    { background: "linkedin.svg", Content: Contact },
  ];
  const imageProps = {
    // fill: true,
    height: 100,
    width: 100,
    style: { opacity: "0" },
  };
  return (
    <Parallax pages={pages.length} ref={ref}>
      <ParallaxLayer
        sticky={{ start: 0, end: pages.length - 1 }}
        style={{ height: "0", width: "0" }}
      >
        <Navbar
          links={pages.map(({ Content }) => Content.name)}
          homeRef={ref}
        />
      </ParallaxLayer>
      {pages.map(({ background, Content }, pageNumber) => (
        <div key={pageNumber}>
          <ParallaxLayer offset={pageNumber} className={styles.section}>
            <Image src={`/${background}`} alt={background} {...imageProps} />
          </ParallaxLayer>
          <ParallaxLayer offset={pageNumber} speed={1}>
            <Content />
          </ParallaxLayer>
        </div>
      ))}
    </Parallax>
  );
}
