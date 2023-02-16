import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function DistinctionsTrans({ title }) {
  const itemData = [
    {
      img: "/home/questions/photo.svg",
      title:
        "Ulepszona logistyka",
      desc: "Oprogramowanie dedykowane pomaga firmie transportowej w zoptymalizowaniu planowania tras, poprzez zintegrowanie systemu nawigacyjnego, map i prognoz pogody, co pozwala na oszczędność czasu i kosztów oraz minimalizuje ryzyko opóźnień w dostawach.",
    },
    {
      img: "/home/questions/photo2.svg",
      title:
        "Śledzenie ładunków i pojazdów",
      desc: "Oprogramowanie “szyte na miarę” pozwala firmie transportowej na śledzenie pojazdów i ładunków w czasie rzeczywistym. Dzięki temu Twoja firma będzie mogła szybko reagować na wszelkie nieprzewidziane sytuacje, takie jak opóźnienia, wypadki lub awarie, co pozwoli na szybszą reakcję i zminimalizowanie problemów.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Zarządzanie flotą",
      desc: "Oprogramowanie stworzone “od zera” pomoże Twojej firmie transportowej w zarządzaniu flotą pojazdów, na przykład poprzez monitorowanie stanu technicznego pojazdów, przeglądów i napraw, co pozwoli na zapobieganie awariom i minimalizowanie ryzyka przestojów.",
    },
    {
      img: "/home/questions/photo.svg",
      title:
        "Zarządzanie dokumentacją",
      desc: "Stworzone przez nas oprogramowanie pomoże Twojej firmie w zarządzaniu dokumentacją związaną z przewozami, taką jak faktury, umowy i listy przewozowe, co pozwoli na łatwiejsze, szybsze i bardziej przejrzyste zarządzanie dokumentami.",
    },
    {
      img: "/home/questions/photo2.svg",
      title:
        "Poprawa efektywności",
      desc: "Oprogramowanie dedykowane pomoże w poprawie efektywności całej firmy transportowej, na przykład poprzez zminimalizowanie zużycia i kosztów paliwa, optymalizację tras, planowania dostaw, szybką wymianę dokumentów, dzięki czemu Twoja firma osiągnie lepsze wyniki finansowe.",
    },
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
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
          let tl = gsap.timeline({
            stagger: 1,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              // markers: true,
              immediateRender: false,
              start: `top bottom`,
              end: "bottom bottom",
            },
          });
          tl.set(el, { y: "0" });
          tl.fromTo(
            el,
            {
              x: index % 2 == 0 ? "-=500" : "+=500",
              opacity: 0,
            },
            {
              x: "0",
              opacity: 1,
            }
          );
          tl.set(el, { x: "0" });
        },

        all: function () {},
      });
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
      <TextWrap ref={TitleRef}>
        <Header subtitle="" title={title} center />
      </TextWrap>
      <List ref={TilesRef}>
        {itemData.map((item, index) => (
          <ListItem key={index} ref={addToRefs}>
            <Image
              src={item.img}
              width={300}
              height={300}
              objectFit="contain"
              alt={item.title}
            />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

const TextWrap = styled.div`
  padding-bottom: 32px;
`;

const List = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  /* @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

const ListItem = styled.div`
  box-shadow: 0px 7px 20px 0px rgb(42 22 139 / 8%);
  padding: 30px 20px;
  text-align: center;
  .icon {
    height: 64px;
    padding: 48px 0;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #696969;
  }
`;
