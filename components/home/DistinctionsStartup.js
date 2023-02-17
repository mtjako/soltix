import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function DistinctionsStartup({ title }) {
  const itemData = [
    {
      img: "/home/contact/process.svg",
      title: "Wiedza techniczna i doświadczenie",
      desc: "Nasz software house posiada specjalistów z różnych obszarów IT, którzy posiadają niezbędną wiedzę i doświadczenie. Dzięki temu potrafimy opracować, stworzyć i wdrożyć skuteczne rozwiązania programistyczne, które umożliwią bezproblemowe i bezstresowe zrealizowanie Twojego pomysłu na startup.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Minimalizacja czasu i kosztów",
      desc: "Współpraca z nami pomoże w znacznym zmniejszeniu czasu potrzebnego do opracowania i wdrożenia oprogramowania, a co za tym idzie również i kosztów. Dzięki korzystaniu ze sprawdzonych narzędzi do tworzenia oprogramowania, zaoszczędzimy Twój czas i pieniądze potrzebne na wdrożenie Twojego pomysłu.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Skalowalność biznesu",
      desc: "Nasz software house pomoże Tobie w zaprojektowaniu i wdrożeniu aplikacji, która będzie skalowalna i przygotowany do szybkiego rozwoju wraz z rozwojem firmy i Twoich dalszych planów. To oznacza, że Twój startup będzie miał możliwość rozwijania swojego produktu, w miarę jak będzie rosła liczba użytkowników.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Wsparcie techniczne",
      desc: "Współpraca z SOLTIX Software House zapewni Tobie wsparcie techniczne na każdym etapie rozwoju aplikacji. Nasi specjaliści będą pracować na bieżąco nad rozwiązywaniem ewentualnych problemów technicznych i dbać o to, aby Twój system działał bez zakłóceń.",
    },
    {
      img: "/home/contact/process.svg",
      title: "Dostęp do nowych technologii",
      desc: "Nasz software house jest zorientowany na najnowsze trendy i technologie, co oznacza, że Twój startup, już od etapu planowania, będzie miał dostęp do najnowszych narzędzi oprogramowania, które przyniosą korzyści dla rozwoju Twojego produktu.",
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
