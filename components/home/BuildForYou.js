import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";
import Image from "next/image";

export default function BuildForYou() {
  const items = [
    { name: "Aplikacje webowe", img: "/home/buildforyou/icon1.svg" },
    { name: "Aplikacje mobilne", img: "/home/buildforyou/icon4.svg" },
    {
      name: "Rozwiązania Augmented Realty",
      img: "/home/buildforyou/icon3.svg",
    },
    { name: "Rozwiązania e-commerce", img: "/home/buildforyou/icon2.svg" },
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
      <div ref={TitleRef}>
        <Header
          subtitle=""
          title="Jesteśmy gotowi stworzyć dla Państwa"
          center
        />
      </div>
      <ItemList ref={TilesRef}>
        {items.map((item, index) => (
          <Item key={index} ref={addToRefs}>
            <ItemIcon>
              <Image
                width={50}
                height={50}
                objectFit="contain"
                src={item.img}
                alt={item.name}
              />
            </ItemIcon>
            <p>{item.name}</p>
          </Item>
        ))}
      </ItemList>
    </Wrapper>
  );
}

const ItemList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  column-gap: 20px;
  row-gap: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
`;

const ItemIcon = styled.div`
  background-color: ${(props) => props.theme.blue100};
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
  img {
    width: 50%;
    height: 50%;
  }
`;
