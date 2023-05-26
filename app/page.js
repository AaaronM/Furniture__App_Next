import Image from "next/image";
import Link from "next/link";
import Main from "./components/Main";
import Legend from "./components/Legend";
import Abitare from "./components/Abitare";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import ThreeDCarousel from "./components/ThreeDCarousel";
import Section2 from "./components/Section2";
import ParallaxText from "./components/ParallaxText";
import Marblepar from "./components/marblepar";
import Section6 from "./components/Section6";
import Press from "./components/Press";

export default function Home() {
  return (
    <div>
      <Main />
      {/* <Legend /> */}
      <Section2 />
      <ParallaxText />
      <Section5 />
      <Section3 />
      <Section4 />

      <Section6 />
      <Press />

      {/* <Marblepar /> */}
      {/* <ThreeDCarousel /> */}
      {/* <Abitare /> */}
      {/* 
      <Section5 /> */}
    </div>
  );
}
