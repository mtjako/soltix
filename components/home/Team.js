import styled from "styled-components";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Header from "../layout/Header";

export default function Team() {
  let dataMembers = [
    {
      img: "/home/team/wojciechs.jpg",
      name: "Wojciech Smykowski",
      position: "CEO Soltix",
    },
    {
      img: "/home/team/lukaszs.jpg",
      name: "Łukasz Smykowski",
      position: "CEO Soltix",
    },
    {
      img: "/home/team/mateuszj.jpg",
      name: "Mateusz Jakowlew",
      position: "Frontend Developer",
    },
    {
      img: "/home/team/mykytam.jpg",
      name: "Mykyta Melnyk",
      position: "Backend Developer",
    },
  ];
  dataMembers = dataMembers.sort(() => Math.random() - 0.5)


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
              // markers: true,
              immediateRender: false,
              start: `${index < 4 ? index + 1 + "0%" : "50%"} 75%`,
              end: `bottom ${index < 4 ? "bottom" : "90%"}`,
            },
          });
          tl.set(el, { x: "0" });
          tl.fromTo(
            el,
            {
              x: "-=269",
              opacity: 0,
            },
            {
              x: "0",
              opacity: 1,
            }
          );
          tl.set(el, { x: "0" });
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
              x: "-=269",
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
    <TeamWrapper>
      <div ref={TitleRef}>
        <Header subtitle="Nasz skład" title="Nasz sprawny i doświadczony zespół" center />
      </div>
      <Members quantity={dataMembers.length}>
        {dataMembers.map((member, index) => (
          <Member key={index} ref={addToRefs} num={dataMembers.length - index}>
            <Image
              src={member.img}
              width={270}
              height={350}
              objectFit="cover"
              alt={member.name}
            />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </Member>
        ))}
      </Members>
    </TeamWrapper>
  );
}

const TeamWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto 100px;
`;

const Members = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.quantity}, 25%);
  @media (max-width: 900px) {
    grid-template-columns: repeat(${(props) => props.quantity}, 33.33%);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(${(props) => props.quantity}, 50%);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(${(props) => props.quantity}, 100%);
  }
  grid-template-rows: 1fr;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Member = styled.div`
  min-width: calc(25% - 16px);
  text-align: center;
  margin-right: 16px;
  z-index: ${(props) => props.num};
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #696969;
  }
`;
