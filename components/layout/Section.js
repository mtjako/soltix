import styled from "styled-components";
import Wrapper from "./Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Header from "./Header";

export default function Section({
  subtitle,
  title,
  desc,
  img,
  left,
  noscroll,
}) {
  gsap.registerPlugin(ScrollTrigger);
  const SectionRef = useRef();
  const SectionImgRef = useRef();
  const TitleRef = useRef(null);
  const TextRef = useRef(null);

  useEffect(() => {
    //IMAGE SHOW
    gsap.fromTo(
      SectionImgRef.current,
      {
        x: left ? "+=500" : "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        ...(noscroll && { duration: 1 }),
        ...(!noscroll && {
          scrollTrigger: {
            trigger: SectionRef.current,
            start: "top bottom",
            end: "bottom bottom",
            // markers: true,
            scrub: 1,
          },
        }),
      }
    );
    gsap.set(SectionImgRef.current, { x: "0" });
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
        ...(noscroll && { duration: 1 }),
        ...(!noscroll && {
          scrollTrigger: {
            trigger: SectionRef.current,
            start: "40% bottom",
            end: "bottom bottom",
            //   markers: true,
            scrub: 1,
          },
        }),
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
    //TEXT SHOW
    gsap.fromTo(
      TextRef.current,
      {
        x: left ? "-=500" : "+=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        ...(noscroll && { duration: 1 }),
        ...(!noscroll && {
          scrollTrigger: {
            trigger: SectionRef.current,
            start: "top bottom",
            end: "bottom bottom",
            // markers: true,
            scrub: 1,
          },
        }),
      }
    );
    gsap.set(TextRef.current, { x: "0" });
  }, []);

  return (
    <Wrapper>
      <SectionWrapper ref={SectionRef} left={left}>
        <div ref={SectionImgRef}>
          <Image
            src={img}
            width={550}
            height={550}
            objectFit="contain"
            alt={subtitle}
          />
        </div>
        <SectionText>
          <div ref={TitleRef}>
            <Header subtitle={subtitle} title={title} />
          </div>
          <div ref={TextRef} dangerouslySetInnerHTML={{ __html: desc }}></div>
        </SectionText>
      </SectionWrapper>
    </Wrapper>
  );
}

const SectionWrapper = styled.div`
  display: grid;
  align-items: center;
  column-gap: 64px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1172px) {
    padding: 16px;
  }
  @media (max-width: 768px) {
    padding: 64px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 568px) {
    padding: 32px;
  }
  @media (max-width: 468px) {
    padding: 16px;
  }
  & > *:first-child {
    ${(props) => (props.left ? "order: 2" : "")};
    @media (max-width: 768px) {
      order: 1;
    }
  }
`;

const SectionText = styled.div`
  @media (max-width: 768px) {
    margin-top: 24px;
  }
  p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
