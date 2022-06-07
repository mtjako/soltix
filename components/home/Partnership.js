import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function Partnership() {
  const logoData = [
    { img: "/home/partnership/logo1.png", name: "logo" },
    { img: "/home/partnership/logo2.png", name: "logo" },
    { img: "/home/partnership/logo3.png", name: "logo" },
    { img: "/home/partnership/logo4.png", name: "logo" },
    { img: "/home/partnership/logo5.png", name: "logo" },
    { img: "/home/partnership/logo6.png", name: "logo" },
    { img: "/home/partnership/logo7.png", name: "logo" },
    { img: "/home/partnership/logo8.png", name: "logo" },
  ];
  gsap.registerPlugin(ScrollTrigger);
  const TitleRef = useRef(null);

  const TilesRef = useRef(null);
  const TileRefs = useRef([]);
  TileRefs.current = [];

  const addToRefs = (el) => {
    if (el && !TileRefs.current.includes(el)) {
      TileRefs.current.push(el);
    }
  };
  useEffect(() => {
    //SHOW TILES
    TileRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: TilesRef.current,
            start: `top 100%`,
            end: "top 50%",
            // markers: true,
            immediateRender: false,
            scrub: 1,
          },
        }
      );
      gsap.set(el, { x: "0" });
    });
    //TITLE SHOW
    gsap.fromTo(
      TitleRef.current,
      {
        y: "100",
        opacity: 0,
      },
      {
        y: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TitleRef.current,
          start: "40% bottom",
          end: "bottom 50%",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
  }, []);
  return (
    <Wrapper>
      <PartnershipHeader ref={TitleRef}>
        <Header subtitle="Partnership" title="We work with" center />
      </PartnershipHeader>
      <Partnerships ref={TilesRef}>
        {logoData.map((logo, index) => (
          <div ref={addToRefs} key={index}>
            <Image
              src={logo.img}
              width={200}
              height={100}
              objectFit="contain"
              alt={logo.name}
            />
          </div>
        ))}
      </Partnerships>
    </Wrapper>
  );
}
const Partnerships = styled.div`
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PartnershipHeader = styled.div`
  padding-bottom: 32px;
`;
