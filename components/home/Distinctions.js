import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function Distinctions() {
  const itemData = [
    {
      img: "/home/distinctions/distinctions3.svg",
      title: "Kompetencja najwyższej jakości",
      desc: "Nasz zespół składa się z doświadczonych programistów, grafików, specjalistów ds. marketingu oraz project managerów. Wszystkie projekty realizujemy w oparciu o wiodące światowe wytyczne oraz w oparciu o aktualne trendy i kierunki rozwoju w zakresie programowania na zamówienie.",
    },
    {
      img: "/home/distinctions/distinctions2.svg",
      title: "Wysoki standard za rozsądną cenę",
      desc: "Dzięki dużemu doświadczeniu możemy sobie pozwolić na niższe koszty naszej pracy. Dzięki temu tworzone przez nas projekty są konkurencyjne cenowo w porównaniu do innych software house'ów, przy zachowaniu jeszcze wyższych standardów tworzenia dzięki kreatywności i wiedzy naszych programistów.",
    },
    {
      img: "/home/distinctions/distinctions1.png",
      title: "Wysoka niezawodność i dokładność",
      desc: "Nie od dziś wiadomo, że polscy deweloperzy słyną z solidności i precyzji. To samo dotyczy wszystkich członków naszego zespołu - rzetelność i dokładność mamy w genach! A dzięki wsparciu profesjonalnych narzędzi, których używamy, tworzy mieszankę wysokiego standardu i niezachwianej jakości.",
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
            scrollTrigger: {
              trigger: el,
              scrub: true,
              immediateRender: false,
              start: `${(index + 1) * 2 + "0%"} 75%`,
              end: "bottom 75%",
            },
          });
          tl.set(el, { x: "0" });
          tl.fromTo(
            el,
            {
              y: "-=128",
              opacity: 0,
            },
            {
              y: "0",
              opacity: 1,
            }
          );
          tl.set(el, { y: "0" });
        },

        "(max-width: 768px)": function () {
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
        <Header
          subtitle="SOLTIX Software House"
          title="Dlaczego powinieneś wybrać nas?"
          center
        />
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
  grid-template-columns: repeat(3, 1fr);
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
