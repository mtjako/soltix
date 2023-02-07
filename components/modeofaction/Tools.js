import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Wrapper from "../layout/Wrapper";
import Header from "../layout/Header";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Tools() {
  gsap.registerPlugin(ScrollTrigger);
  const TitleRef = useRef(null);
  const TextRef = useRef(null);
  const ToolsRef = useRef(null);

  useEffect(() => {
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
          end: "bottom 60%",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
    //TEXT SHOW
    gsap.fromTo(
      TextRef.current,
      {
        x: "+=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TextRef.current,
          start: "40% bottom",
          end: "bottom 60%",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TextRef.current, { x: "0" });
    //TOOLS SHOW
    gsap.fromTo(
      ToolsRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: ToolsRef.current,
          start: "40% bottom",
          end: "bottom 60%",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(ToolsRef.current, { x: "0" });
  }, []);
  return (
    <Wrapper>
      <ToolsWrapper>
        <ToolsTech ref={ToolsRef}>
          <TechWrap>
            <MainTech>
              <p>
                TECH
                <br />
                STACK
              </p>
            </MainTech>
            <Tech>
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech1.svg"}
                  width={64}
                  height={64}
                  alt="VueJS"
                />
              </a>
            </Tech>
            <Tech>
              <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech2.svg"}
                  width={64}
                  height={64}
                  alt="NuxtJS"
                />
              </a>
            </Tech>
            <Tech>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech3.svg"}
                  width={64}
                  height={64}
                  alt="ReactJS"
                />
              </a>
            </Tech>
            <Tech>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech4.svg"}
                  width={64}
                  height={64}
                  alt="NextJS"
                />
              </a>
            </Tech>
            <Tech>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={"/modeofaction/tech5.svg"}
                  width={64}
                  height={64}
                  alt="TailwindCSS"
                />
              </a>
            </Tech>
            <Tech>
              <a href="https://quasar.dev/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech6.svg"}
                  width={64}
                  height={64}
                  alt="Quasar"
                />
              </a>
            </Tech>

            <Tech>
              <a href="https://laravel.com/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech7.svg"}
                  width={64}
                  height={64}
                  alt="Laravel"
                />
              </a>
            </Tech>
            <Tech>
              <a href="https://symfony.com/" target="_blank" rel="noreferrer">
                <Image
                  src={"/modeofaction/tech8.svg"}
                  width={64}
                  height={64}
                  alt="Symfony"
                />
              </a>
            </Tech>
          </TechWrap>
        </ToolsTech>
        <ToolsText>
          <div ref={TitleRef}>
            <Header subtitle="Narzędzia" title="W czym tworzymy?" />
          </div>
          <p ref={TextRef}>
          Oprogramowanie tworzymy w najnowszej wersji najpopularniejszego języka programowania - PHP 7. Do tego celu wykorzystujemy frameworki Symfony, Laravel 6/7 oraz OctoberCMS. Do programowania elementów HTML i stylów CSS używamy Bootstrap 4, UIKit 3 i Tailwind CSS. W programowaniu JavaScript używamy Vue.js, Nuxt.js i Quasar.
          </p>
        </ToolsText>
      </ToolsWrapper>
    </Wrapper>
  );
}
const rotateTech = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateTechRev = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const pulse = keyframes`
    from{
        transform: scale(1.1);
    }
    to{
        transform: scale(1.3);
    }
`;

const ToolsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  align-items: center;
`;
const ToolsText = styled.div`
  p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
const ToolsTech = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;
const TechWrap = styled.div`
  width: 256px;
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  animation: ${rotateTechRev} 32s infinite linear;
`;
const MainTech = styled.div`
  width: 80px;
  height: 80px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  animation: ${rotateTech} 32s infinite linear;
  position: relative;
  p {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.neutral050};
    background-color: ${(props) => props.theme.blue900};
    align-items: center;
    cursor: default;
    &::selection {
      background-color: transparent;
    }
  }
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    background-color: ${(props) => props.theme.blue100};
    z-index: -1;
    animation: ${pulse} 3s infinite alternate ease-in-out;
  }
`;

const Tech = styled.div`
  position: absolute;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  animation: ${rotateTech} 32s infinite linear;
  &:nth-child(2) {
    //next
    top: 64px;
    left: 0px;
  }
  &:nth-child(3) {
    //nuxt
    top: 0px;
    left: 64px;
  }
  &:nth-child(4) {
    //quasar
    top: 0px;
    right: 64px;
  }
  &:nth-child(5) {
    //react
    top: 64px;
    right: 0px;
  }
  &:nth-child(6) {
    //vue
    bottom: 64px;
    right: 0px;
  }
  &:nth-child(7) {
    //vue
    bottom: 0px;
    right: 64px;
  }
  &:nth-child(8) {
    //vue
    bottom: 0px;
    left: 64px;
  }
  &:nth-child(9) {
    //vue
    bottom: 64px;
    left: 0px;
  }
`;
