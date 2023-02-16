import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function DistinctionsProd({ title }) {
  const itemData = [
    {
      img: "/home/questions/photo.svg",
      title:
        "Automatyzacja procesów produkcyjnych",
      desc: "Oprogramowanie ściśle dostosowane do specyfiki działalności Twojej firmy produkcyjnej pozwoli na zautomatyzowanie wielu procesów, co z kolei przyspieszy całą produkcję i zminimalizuje możliwość ewentualnych odchyleń od założonych norm oraz popełnienia błędów.",
    },
    {
      img: "/home/questions/photo2.svg",
      title:
        "Poprawa kontroli nad produkcją",
      desc: "Dedykowane oprogramowanie tworzone “od zera” umożliwi Tobie łatwiejsze monitorowanie procesów produkcyjnych na każdym ich etapie - od stworzenia koncepcji po wysłanie finalnego produktu do klienta. Pozwoli także na szybką reakcję osób decyzyjnych na ewentualne problemy i błędy.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Optymalizacja zarządzania danymi.",
      desc: 'Oprogramowanie "szyte na miarę" pomoże w gromadzeniu, przetwarzaniu i analizowaniu wszelkich danych związanych z produkcją. Dzięki temu Twoja firma będzie mogla dokładnie śledzić, jakie procesy produkcyjne przynoszą najlepsze wyniki i na tej podstawie podejmować strategiczne decyzje.',
    },
    {
      img: "/home/contact/process.svg",
      title: "Poprawa efektywności i wydajności",
      desc: 'Zastosowanie stworzonego przez nas oprogramowania pozwoli na lepszą koordynację prac pomiędzy różnymi działami w firmie. To z kolei, np. poprzez natychmiastową wymianę informacji, bezpośrednio przełoży się na zwiększenie efektywności i wydajności całego Twojej firmy.',
    },
    {
      img: "/home/contact/process.svg",
      title: "Redukcja kosztów",
      desc: 'Na bazie naszych doświadczeń wiemy, że oprogramowanie "szyte na miarę" pomoże w minimalizacji kosztów produkcji, na przykład poprzez optymalizację zarządzania zasobami ludzkimi, zarządzania stanami zamówień, zapasów czy też zmniejszenie ilości odpadów.',
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
