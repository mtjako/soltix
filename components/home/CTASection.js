import Link from "next/link";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Btn from "../layout/Btn";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function CTASection({title}) {
  gsap.registerPlugin(ScrollTrigger);
  const ImgRef = useRef(null);
  const TitleRef = useRef(null);
  const BtnRef = useRef(null);

  useEffect(() => {
    //IMG SHOW
    gsap.fromTo(
      ImgRef.current,
      {
        y: "200",
        opacity: 0,
      },
      {
        y: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: ImgRef.current,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(ImgRef.current, { y: "0" });
    //TITLE SHOW
    gsap.fromTo(
      TitleRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TitleRef.current,
          start: "top bottom",
          end: "bottom bottom",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TitleRef.current, { x: "0" });
    //BTN SHOW
    gsap.fromTo(
      BtnRef.current,
      {
        x: "+=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: BtnRef.current,
          start: "top bottom",
          end: "bottom bottom",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(BtnRef.current, { x: "0" });
  }, []);
  return (
    <Wrapper>
      <ContactWrapper>
        <div ref={ImgRef}>
          <Image
            width={500}
            height={500}
            objectFit="contain"
            src="/home/contact/process.svg"
            alt="contact"
          />
        </div>
        <div ref={TitleRef} className="box">
          <h3>
            {title ? title : "Czujesz, że w Twojej firmie potrzebna jest automatyzacja i digitalizacja procesów, ale nie wiesz jak za to się zabrać?"}
          </h3>
          <h2>
          Firmy tworzące oprogramowanie oczekują od Ciebie specyfikacji, ale nie wiesz jak ją stworzyć lub nie masz na to czasu?
          </h2>
          <p>
          Jesteśmy po to, aby ułatwić Tobie cały ten proces! Wspólnie określimy potrzeby, zaproponujemy możliwe funkcjonalności i stworzymy specyfikację wymagań Twojego oprogramowania.

          </p>
        </div>
        <div ref={BtnRef}>
          <Link href="/contact">
            <div>
              <Btn>UMÓW DARMOWE, PÓŁTORAGODZINNE WARSZTATY</Btn>
            </div>
          </Link>
          <Link href="/modeofaction">
            <div className="center">
              <InfoText>Jak wyglądają warsztaty?</InfoText>
            </div>
          </Link>
        </div>
      </ContactWrapper>
    </Wrapper>
  );
}

const ContactWrapper = styled.div`
  text-align: center;
  .box {
    max-width: 780px;
    margin: 0 auto;
  }
  h3 {
    font-size: 20px;
    text-transform: uppercase;
    color: #2563eb;
    margin-bottom: 4px;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 8px;
  }
  p {
    font-size: 18px;
    margin-bottom: 16px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  img {
    margin-top: 20px;
    width: 40%;
    @media (max-width: 1000px) {
      width: 400px;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;

const InfoText = styled.div`
  color: #737373;
  margin-top: 8px;
  cursor: pointer;
  border-bottom: 1.5px solid #aaa;
  width: max-content;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`;
