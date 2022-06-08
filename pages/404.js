import Head from "next/head";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import Wrapper from "../components/layout/Wrapper";
import styled from "styled-components";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import Btn from "../components/layout/Btn";

export default function Error404() {
  const Counter = useRef();

  useEffect(() => {
    //COUNTER SHOW
    gsap.from(Counter.current, {
      textContent: 0,
      delay: 0.5,
      duration: 1.5,
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
    });
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Soltix - 404</title>
        <meta name="description" content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!" />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Wrapper>
        <ErrorWrap>
          <ErrorNumber ref={Counter}>404</ErrorNumber>
          <p>
            Oops! It could be you or us, there is no page here. It might have
            been moved or deleted.
          </p>
          <Btn link="/">Back to home</Btn>
        </ErrorWrap>
      </Wrapper>
      <Footer />
    </div>
  );
}
const ErrorWrap = styled.div`
  text-align: center;
  p {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
  }
`;
const ErrorNumber = styled.h1`
  color: ${(props) => props.theme.neutral900};
  font-size: 180px;
  font-weight: 700;
`;
