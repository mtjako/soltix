import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Timeline() {
  const TimeLineData = [
    {
      title: "Wypełnij formularz",
      desc: "Uzyskaj wstępny szacunek. Wypełnienie formularza zajmie Ci około 3 minut.",
      img: "/modeofaction/timeline1.png",
    },
    {
      title: "My przygotujemy wstępną listę funkcji",
      desc: "Przeanalizujemy Twoje potrzeby, wybierzemy optymalną technologię i wstępnie wycenimy projekt.",
      img: "/modeofaction/timeline4.png",
    },
    {
      title: "Spotkajmy się",
      desc: "Preferujemy spotkania osobiste (w Twoim biurze lub u nas w Zielonej Górze) a także on-line. Przeprowadzimy warsztaty, które w pełni wyjaśniają nam Twoje potrzeby i wymagania.",
      img: "/modeofaction/timeline5.png",
    },
    {
      title: "Ostateczna wycena i oferta",
      desc: "Gdy poznamy wszystkie Twoje potrzeby, rozważymy możliwości i dobierzemy technologię by przedstawić ostateczną ofertę.",
      img: "/modeofaction/timeline3.png",
    },
    {
      title: "Tworzenie oprogramowania",
      desc: "Zmienimy Twoje potrzeby w idealne rozwiązanie IT. Pracujemy w frameworku Agile, zawsze testujemy kod by ostatecznie dostarczyć produkt najwyższej jakości.",
      img: "/modeofaction/timeline2.png",
    },
    {
      title: "Wdrożenie i szkolenie",
      desc: "Gdy Twoje oprogramowanie będzie gotowe i w pełni przez Ciebie zaakceptowane, wdrożymy je na wybranym serwerze i przeszkolimy Twój zespół.",
      img: "/modeofaction/timeline5.png",
    },
    {
      title: "Wsparcie i utrzymanie",
      desc: "Korzystamy z globalnych znanych technologii. Nasz kod może być dalej rozwijany przez każdego w dowolnym momencie. Jednak zawsze zapewniamy co najmniej 12-miesięczne wsparcie.",
      img: "/modeofaction/timeline1.png",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
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
      if (index !== 0) {
        gsap.fromTo(
          el.children[0],
          {
            x: index % 2 == 0 ? "-=500" : "+=500",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom 80%",
              // markers: true,
              immediateRender: false,
              scrub: true,
            },
          }
        );
        gsap.set(el.children[0], { x: "0" });
        gsap.fromTo(
          el.children[1],
          {
            x: index % 2 == 0 ? "+=500" : "-=500",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            stagger: 1,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom 80%",
              // markers: true,
              immediateRender: false,
              scrub: true,
            },
          }
        );
        gsap.set(el.children[1], { x: "0" });
      } else {
        gsap.fromTo(
          el.children[0],
          {
            x: index % 2 == 0 ? "-=500" : "+=500",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            stagger: 1,
            delay: 0.5,
            duration: 0.75,
          }
        );
        gsap.set(el.children[0], { x: "0" });
        gsap.fromTo(
          el.children[1],
          {
            x: index % 2 == 0 ? "+=500" : "-=500",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            stagger: 1,
            delay: 0.5,
            duration: 0.75,
          }
        );
        gsap.set(el.children[1], { x: "0" });
      }
    });
  }, []);
  return (
    <Wrapper>
      <TimelineWrapper ref={TilesRef}>
        {TimeLineData.map((item, index) => (
          <TimeLineRow key={index} ref={addToRefs}>
            <TimelineItem>
              <div className="number">{index + 1}</div>
              <div className="text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </TimelineItem>
            <TimelineImg>
              <Image
                src={item.img}
                width={200}
                height={200}
                objectFit="contain"
                alt={item.title}
              />
            </TimelineImg>
          </TimeLineRow>
        ))}
      </TimelineWrapper>
    </Wrapper>
  );
}

const TimelineWrapper = styled.div`
  position: relative;
  &::before {
    transform: translateX(-50%);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    background-color: ${(props) => props.theme.neutral500};
    border-radius: 2px;
    width: 4px;
    height: 100%;
  }
`;

const TimeLineRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  & > *:first-child {
    &::after {
      position: absolute;
      transform: translateY(-50%);
      content: "";
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
      width: 64px;
      border-top: 4px dashed ${(props) => props.theme.neutral500};
    }
    &::before {
      position: absolute;
      content: "";
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      z-index: 2;
      border: 8px solid ${(props) => props.theme.neutral400};
    }
  }
  &:nth-child(even) {
    & > *:first-child {
      border-left: 4px solid ${(props) => props.theme.blue200};
      margin: 64px 0 0 64px;
      @media (max-width: 768px) {
        margin-left: 0;
      }
      order: 2;
      position: relative;
      &::after {
        top: 50%;
        left: -68px;
      }
      &::before {
        transform: translateX(-50%);
        left: -68px;
      }
    }
    & > *:last-child {
      margin: 64px 64px 0 0;
      @media (max-width: 768px) {
        margin-right: 0;
      }
    }
  }
  &:nth-child(odd) {
    & > *:first-child {
      margin: 64px 64px 0 0;
      border-right: 4px solid ${(props) => props.theme.blue200};
      grid-template-columns: 1fr 64px;
      text-align: right;
      .number {
        order: 2;
      }
      @media (max-width: 768px) {
        margin-right: 0;
      }
      position: relative;
      &::after {
        top: 50%;
        right: -68px;
      }
      &::before {
        transform: translateX(50%);
        right: -68px;
      }
    }
    & > *:last-child {
      margin: 64px 0 0 64px;
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
  }
`;
const TimelineItem = styled.div`
  /* border-radius: 4px; */
  position: relative;
  z-index: 3;
  margin-top: 50px;
  /* box-shadow: 2px 5px 20px 0px rgb(23 22 139 / 4%); */
  padding: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: 64px 1fr;
  column-gap: 16px;
  background-color: #fff;

  .number {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    /* background-color: ${(props) => props.theme.blue050}; */
    color: ${(props) => props.theme.blue500};
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
  }
  .text {
    h4 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #696969;
    }
  }
`;
const TimelineImg = styled.div`
  position: relative;
  z-index: 3;
  margin: 50px 64px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
