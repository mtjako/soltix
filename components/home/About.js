import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Header from "../layout/Header";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const AboutRef = useRef();
  const AboutImgRef = useRef();
  const CounterOne = useRef();
  const CounterTwo = useRef();
  const CounterThree = useRef();
  const TitleRef = useRef(null);
  const TextRef = useRef(null);

  useEffect(() => {
    //IMAGE SHOW
    gsap.fromTo(
      AboutImgRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: AboutRef.current,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(AboutImgRef.current, { x: "0" });
    //COUNTER SHOW
    gsap.from([CounterOne.current, CounterTwo.current,CounterThree.current], {
      textContent: 0,
      duration: 2,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 0.1,
        onUpdate: function () {
          this.targets()[0].innerHTML = numberWithCommas(
            Math.ceil(this.targets()[0].textContent)
          );
        },
      },
      scrollTrigger: {
        trigger: AboutRef.current,
        start: "50% bottom",
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
        // markers: true,
      },
    });
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
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
          trigger: AboutRef.current,
          start: "40% bottom",
          end: "bottom bottom",
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
        x: "500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: AboutRef.current,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TextRef.current, { x: "0" });
  }, []);

  return (
    <Wrapper>
      <AboutWrapper ref={AboutRef}>
        <div ref={AboutImgRef}>
          <Image
            src="/home/about/aboutimg.png"
            width={550}
            height={550}
            objectFit="contain"
            alt="about"
          />
        </div>
        <AboutText>
          <div ref={TitleRef}>
            <Header
              subtitle="Skąd jesteśmy"
              title="Jesteśmy blisko Ciebie"
            />
          </div>
          <p ref={TextRef}>
          Nasze biuro znajduje się w Zielonej Górze. Dzięki lokalizacji oraz najnowszym zdobyczom komunikacji jesteśmy gotowi spotkać się z Państwem osobiście lub on-line 🙂
          </p>
          <Counters>
            <Counter>
              <p className="blue">
                <span ref={CounterOne}>12</span>+
              </p>
              <p>lat doś.</p>
            </Counter>
            <Counter>
              <p className="blue">
                ponad <span ref={CounterTwo}>40</span>
              </p>
              <p>pomyślnie ukończonych projektów</p>
            </Counter>
            <Counter>
              <p className="blue">
                <span ref={CounterThree}>1000000</span> €
              </p>
              <p>jest to całkowita wartość stworzonego przez nas oprogramowania</p>
            </Counter>
          </Counters>
        </AboutText>
      </AboutWrapper>
    </Wrapper>
  );
}

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1172px) {
    padding: 16px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 64px;
  }
  @media (max-width: 568px) {
    padding: 32px;
  }
  @media (max-width: 468px) {
    padding: 16px;
  }
  align-items: center;
  column-gap: 64px;
  & > img {
    width: 100%;
  }
`;
const AboutText = styled.div`
  @media (max-width: 768px) {
    margin-top: 24px;
  }

  p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Counters = styled.div`
  margin-top: 16px;
  display: grid;
  column-gap: 10px;
  row-gap: 20px;
  grid-template-columns: 0.5fr 1fr 1fr;
  @media(max-width: 1000px){
    grid-template-columns: 0.5fr 1fr;
  }
  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`;
const Counter = styled.div`
  &:last-child {
    @media(max-width: 1000px){
    grid-column: 1/-1;
  }
  }
  p {
    margin: 0;
    &:first-child {
      font-size: 32px;
      line-height: 32px;
      font-weight: 600;
      padding-bottom: 4px;
    }
    &:last-child {
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    }
    &.blue {
      color: ${(props) => props.theme.blue700};
    }
    &.orange {
      color: ${(props) => props.theme.orange500};
    }
  }
`;
