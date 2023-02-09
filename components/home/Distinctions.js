import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function Distinctions({ title }) {
  const itemData = [
    {
      img: "/home/questions/photo.svg",
      title:
        "Pewnie wciąż dużo procesów w Twojej firmie jest przetwarzanych na kartkach, arkuszach kalkulacyjnych lub innych dokumentach…",
      desc: "Przenieśmy więc procesy do łatwo dostępnej aplikacji webowej lub mobilnej. Każdy pracownik łatwo wprowadzi niezbędne dane a wszystko zostanie zebrane w chmurze i będzie łatwo dostępne, np.: kadrze zarządczej, której umożliwi natychmiastowy dostęp do informacji co zwiększy kontrolę przepływu procesów.",
    },
    {
      img: "/home/questions/photo2.svg",
      title:
        "Chciałbyś umożliwić dostęp do aplikacji swoim klientom?",
      desc: "Twoi klienci będą mogli zalogować się do dedykowanego panelu poprzez aplikację webową lub mobilną i łatwo dostarczać lub sprawdzić informacje, które Twoja firma im udostępni. Dzięki temu Twoi kontrahenci będą mieli dostęp np. do dokumentów czy formularzy. Będą mogli śledzić statystyki wykonywanych zadań oraz być w stałym kontakcie z Twoimi pracownikami.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Czujesz, że w Twojej firmie potrzebna jest automatyzacja i digitalizacja procesów, ale nie wiesz jak za to się zabrać?",
      desc: "Jesteśmy po to, aby ułatwić Tobie cały ten proces! Wspólnie określimy potrzeby, zaproponujemy możliwe funkcjonalności i stworzymy specyfikację wymagań Twojego oprogramowania.",
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
        <Header subtitle="SOLTIX Software House" title={title} center />
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
