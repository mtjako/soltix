import Image from "next/image";
import styled from "styled-components";
import { keyframes } from "styled-components";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Btn from "../layout/Btn";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { EasePack } from "gsap/dist/EasePack";
import Link from "next/link";

export default function Hero({ title, subtitle, subtitleGray, main }) {
  const HeroManRef = useRef();
  const HeroRef = useRef();
  const TitleRef = useRef();
  const HeroDescRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(EasePack);
    gsap.fromTo(
      HeroManRef.current,
      {
        x: "-=100",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        delay: 0.25,
        duration: 1.75,
      }
    );
    gsap.set(HeroManRef.current, { x: "0" });
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
        duration: 1,
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
    //OPINIONS SHOW
    gsap.fromTo(
      HeroDescRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        delay: 0.2,
        duration: 1,
      }
    );
    gsap.set(HeroDescRef.current, { x: "0" });
    //CURSOR TYPING
    const words = [
      "firmie produkcyjnej",
      "firmie transportowej",
      "magazynie",
      "kancelarii prawnej",
      "sklepu internetowego",
      "działu HR",
      "firmie usługowej",
    ];
    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });
    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    masterTl.play();
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
      tl.to(".text", { duration: 1, text: word });
      masterTl.add(tl);
    });
  }, []);

  return (
    <HeroWrap ref={HeroRef}>
      <HeroText>
        <div ref={TitleRef}>
          <p className="subtitle">{subtitle}</p>
          <h1 className="title">{title}</h1>
          <p className="subtitleGray">{subtitleGray}</p>
        </div>
        {main && (
          <p ref={HeroDescRef} className="desc">
            Usprawniamy procesy w&nbsp;
            <br className="break"></br>
            <span className="text"></span>
            <span className="cursor">|</span>
          </p>
        )}
        <Link href="/contact">
          <div>
            <Btn>UMÓW DARMOWE, GODZINNE WARSZTATY</Btn>
          </div>
        </Link>
        <Link href="/modeofaction">
          <InfoText>Jak wyglądają warsztaty?</InfoText>
        </Link>
      </HeroText>
      <HeroImg>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          width="100%"
          height="100%"
          src="/video/showReel2.mp4"
        />
        {/* <div className="primary">
          <Image
            width={570}
            height={675}
            objectFit="contain"
            src="/home/hero/hero.svg"
            alt="hero image"
          />
        </div>
        <div className="secondary">
          <Image
            width={230}
            height={440}
            objectFit="contain"
            src="/home/hero/hero-leaf.svg"
            alt="hero image leaf"
          />
        </div>
        <div className="tetiary" ref={HeroManRef}>
          <Image
            width={125}
            height={320}
            objectFit="contain"
            src="/home/hero/hero-man.svg"
            alt="hero image man"
          />
        </div> */}
      </HeroImg>
    </HeroWrap>
  );
}

const InfoText = styled.div`
  /* margin: 25%; */
  color: #737373;
  margin-top: 8px;
  cursor: pointer;
  border-bottom: 1.5px solid #aaa;
  width: max-content;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  @media (max-width: 750px) {
    margin: 8px auto 0;
  }
`;

const HeroWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
  /* min-height: calc(100vh - 72px); */
  align-items: center;
  max-width: 1140px;
  margin: 0 auto 100px;
`;

const HeroText = styled.div`
  width: 100%;
  @media (max-width: 1160px) {
    margin-top: 64px;
    padding-left: 20px;
  }
  @media (max-width: 750px) {
    padding: 0 20px;
    text-align: center;
  }
  .title {
    font-size:28px;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 8px;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue600};
  }
  .subtitleGray {
    font-size: 18px;
    font-weight: 400;
  }
  .break {
    @media (min-width: 750px) {
display:none;  }
  h1 {
    font-weight: 700;
    font-size: 28px;
    margin: 8px 0;
    color: ${(props) => props.theme.neutral900};
    @media (max-width: 1160px) {
      font-size: 40px;
      line-height: 50px;
    }
    @media (max-width: 750px) {
      font-size: 24px;
      line-height: normal;
    }
    span {
      color: ${(props) => props.theme.blue700};
    }
  }
  .desc {
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 1160px) {
      font-size: 14px;
    }
  }
`;

const HeroMove = keyframes`
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(10deg);
    }
    75%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;

const HeroImg = styled.div`
  @media (max-width: 750px) {
    width: 75%;
    margin: 0 auto;
  }
  position: relative;
  padding-top: 32px;

  .primary {
    position: relative;
    z-index: 2;
    width: 100%;
  }
  .secondary {
    position: absolute;
    top: 10%;
    right: -10%;
    z-index: 1;
    width: 40%;
    animation: ${HeroMove} 10s linear infinite;
  }
  .tetiary {
    position: absolute;
    bottom: 5%;
    left: 0%;
    z-index: 3;
    width: 22%;
  }
`;
