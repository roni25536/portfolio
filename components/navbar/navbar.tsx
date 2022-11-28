import { IParallax } from "@react-spring/parallax";
import { MutableRefObject, Ref, useEffect, useRef, useState } from "react";

type props = {
  links: string[];
  homeRef: Ref<IParallax>;
};

const navbar = ({ links, homeRef }: props) => {
  const getCurrentPage = () =>
    Math.round(homeRef?.current?.current / homeRef?.current?.space);

  const [currentpage, setCurrentpage] = useState(getCurrentPage());
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => setCurrentpage(getCurrentPage()),
      true
    );
  });

  return (
    <div
      style={{
        position: "absolute",
        display: "grid",
        gridTemplateColumns: `repeat(${links.length}, 1fr)`,
        width: "100vw",
        height: "2rem",
        color: "#a8b2d1",
        backgroundColor: "#0a192f",
        textAlign: "center",
      }}
    >
      {links.map((link, page) => (
        <div
          key={page}
          onClick={() => homeRef?.current?.scrollTo(page)}
          style={{
            // padding: `0 ${100 / links.length}vw`,
            borderBottom: currentPage === page ? "none" : "solid",
            borderLeft: currentPage === page ? "solid" : "none",
            borderRight: currentPage === page ? "solid" : "none",
            borderTop: currentPage === page ? "solid" : "none",
            cursor: "pointer",
          }}
        >
          {link}
        </div>
      ))}
    </div>
  );
};

export default navbar;
