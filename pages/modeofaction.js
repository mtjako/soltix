import Head from "next/head";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import Timeline from "../components/modeofaction/Timeline";
import Wrapper from "../components/layout/Wrapper";
import ResponsiveFrame from "../components/modeofaction/ResponsiveFrame";
import Tools from "../components/modeofaction/Tools";
import Header from "../components/layout/Header";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";

export default function ModeOfAction() {
  const TitleRef = useRef(null);
  const TextRef = useRef(null);

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
        delay: 0.5,
        duration: 0.75,
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
    //TEXT SHOW
    gsap.fromTo(
      TextRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        delay: 0.75,
        duration: 0.5,
      }
    );
    gsap.set(TextRef.current, { y: "0" });
  }, []);
  return (
    <>
      <Head>
        <title>Soltix - Sposób działania</title>
        <meta
          name="description"
          content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!"
        />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Wrapper>
        <TopText>
          <div ref={TitleRef}>
            <Header
              subtitle=""
              title="Poniżej dowiesz się jak przebiega proces tworzenia od Twojego pomysłu do opublikowania systemu lub aplikacji"
              center
            />
          </div>
          <p ref={TextRef}></p>
        </TopText>
      </Wrapper>
      <Timeline />
      <CTASection />
      <Footer />
    </>
  );
}

const TopText = styled.div`
  margin-top: 100px;
  text-align: center;
  h6 {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.blue700};
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #696969;
    max-width: 600px;
    margin: 0 auto;
  }
`;
