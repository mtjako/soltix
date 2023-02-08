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
      img: "/home/partner/photo1.svg",
      title:
        "Ponad 90% firm utrzymuje z nami stałą współpracę - jest to dowód, że wykonujemy swoją pracę dobrze",
      desc: "Dzięki naszemu profesjonalizmowi oraz zaangażowaniu ponad 90% firm, z którymi współpracujemy, po zakończeniu projektu decyduje się na dalszy, wspólny rozwój oprogramowania lub wspólne tworzenie kolejnych rozwiązań.",
    },
    {
      img: "/home/partner/photo2.svg",
      title:
        "Nasza umiejętność zrozumienia Twoich oczekiwań i wymagań zagwarantuje Tobie mniejsze zaangażowanie w proces tworzenia",
      desc: "Wspólne warsztaty i wstępne szkicowanie systemu by stworzyć dokładną specyfikację, daje Tobie gwarancję, że bardzo dobrze rozumiemy Twoje wymagania, co zmniejszy konieczność kontaktu w trakcie budowy systemu.",
    },
    {
      img: "/home/partner/photo3.svg",
      title: "Współpracując z nami nie będziesz musiał tracić czasu i nerwów na niekończące się poprawki",
      desc: "Stosujemy bardzo restrykcyjne narzędzia (Quality Tools), które wymagają od naszych zespołów deweloperskich tworzenia ultra czystego kodu. To gwarantuje, że nie stracisz nerwów związanych z poprawkami, a także, że oprogramowanie może być rozwijane bez ograniczeń przez nas lub kogokolwiek innego w przyszłości.",
    },
    {
      img: "/home/partner/photo4.svg",
      title:
        "Dedykowany zespół dla Twojego projektu da gwarancję, że system zostanie stworzony terminowo",
      desc: "Za Twój projekt będzie odpowiedzialny jeden, stały zespół. Opiekun projektu cały czas będzie kontrolował i doradzał jak sprawić, m.in. aby system był nie tylko efektywny, ale i przyjazny użytkownikom, a zespół go tworzący będzie w 100% zaangażowany w projekt i nie będzie rozkojarzony innymi zadaniami.",
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
