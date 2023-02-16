import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function DistinctionsMag({ title }) {
  const itemData = [
    {
      img: "/home/questions/photo.svg",
      title:
        "Automatyzacja procesów magazynowych",
      desc: "Oprogramowanie “szyte na miarę” pomaga w automatyzacji procesów magazynowych, takich jak przyjmowanie towarów, ich składowanie, przetwarzanie zamówień, kompletacja i wysyłka. Dzięki temu znacznie zwiększa wydajność i dokładność pracy, a także minimalizuje ryzyko pomyłek.",
    },
    {
      img: "/home/questions/photo2.svg",
      title:
        "Zarządzanie stanami magazynowymi",
      desc: "Oprogramowanie dedykowane pomoże w monitorowaniu stanów magazynowych, co umożliwi bieżącą aktualizację stanu magazynu i przepływu towarów. Ułatwi to zarządzanie zapasami i pomoże uniknąć braków towarów, co z kolei przełoży się na zadowolenie klientów.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Optymalizacja przestrzeni magazynowej ",
      desc: "Oprogramowanie tworzone “od zera” pomaga w optymalizacji przestrzeni magazynowej poprzez wykorzystanie wprowadzonych danych, zaawansowanych algorytmów i analiz danych. Dzięki temu optymalizuje układ zajętości regałów i półek w magazynie, co pozwala na efektywniejsze wykorzystanie powierzchni i minimalizację kosztów.",
    },
    {
      img: "/home/questions/photo.svg",
      title:
        "Kontrola jakości",
      desc: "Tworzone przez nas oprogramowanie może pomóc w kontroli jakości produktów składowanych w magazynie, na przykład poprzez kontrolę dat ważności i śledzenie partii produktów. Dzięki temu tylko produkty o dobrej jakości będą dostarczane klientom.",
    },
    {
      img: "/home/questions/photo2.svg",
      title:
        "Zarządzanie zamówieniami i przesyłkami",
      desc: "Oprogramowanie “szyte na miarę” pomaga w zarządzaniu zamówieniami i przesyłkami, na przykład poprzez automatyczne generowanie etykiet i dokumentów przewozowych. Powoduje to minimalizację czasu potrzebnego na przygotowanie zamówień do wysyłki i poprawia jakość obsługi klienta.",
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
