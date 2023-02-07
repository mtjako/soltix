import Image from "next/image";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Btn from "../layout/Btn";

export default function Timeline() {
  const TimeLineData = [
    {
      title: "Uzupełnij formularz",
      desc: "Potrzebujemy podstawowych informacje o firmie oraz wstępnego, opisu Twoich potrzeb, pomysłów lub opisu obszarów, które wymagają usprawnienia.",
      img: "/modeofaction/img1.svg",
      button: <Link href="/contact">
      <div>
        <Btn>UMÓW DARMOWE, GODZINNE WARSZTATY</Btn>
      </div>
    </Link>
    },
    {
      title: "Ustalmy dogodny termin oraz miejsce spotkania",
      desc: "Preferujemy osobiste spotkania w Twojej firmie jeśli znajduje się ona w woj. lubuskim, wielkopolskim, zachodniopomorskim, dolnośląskim lub blisko lotniska. Ale bądź spokojny, prowadzimy także warsztaty on-line.",
      img: "/modeofaction/img2.svg",
    },
    {
      title: "Warsztaty czyli poznajemy Twoją firmę, potrzeby i pomysły",
      desc: "Pierwsza część warsztatów to dla nas okazja, aby poznać obszary w których Twoja firma poszukuje wsparcia poprzez informatyzację, automatyzację lub digitalizację procesów. Jest to też czas dla nas abyśmy szerzej poznali Twój pomysł na aplikację webową lub mobilną. Na tym etapie przeanalizujemy także jakie rozwiązanie funkcjonalne będą najbardziej korzystne dla Ciebie.",
      img: "/modeofaction/img3.svg",
    },
    {
      title:
        "Warsztaty czyli konkretyzujemy oprogramowanie (mockup’ujemy, rysujemy szkic)",
      desc: "Po zebraniu wstępnych potrzeb zabieramy się za wspólne rysowanie (dosłownie!) aplikacji webowej lub mobilnej. Przechodzimy przez kolejne ekrany, widoki i rozrysowujemy jej funkcje. W końcowej fazie warsztatów będziemy w stanie także wstępnie oszacować koszty Twojego oprogramowania.",
      img: "/modeofaction/img4.svg",
    },
    {
      title: "Spis funkcjonalności",
      desc: "Po spotkaniu, przeważnie w ciągu kilku dni, przygotowujemy wstępny spis funkcjonalności na podstawie zebranych informacji podczas warsztatów rozmów i rozrysowanego oprogramowania. Następnie spis funkcjonalności wysyłamy do Ciebie w celu weryfikacji i naniesienia ewentualnych dodatkowych poprawek lub uwag.",
      img: "/modeofaction/img5.svg",
    },
    {
      title: "Estymacja i ponowne spotkanie",
      desc: "Posiadając gotowy spis funkcjonalności przystępujemy do estymowania całego projektu. Szacujemy przede wszystkim czas jaki nasz software house będzie potrzebował, aby stworzyć oprogramowanie. Oszacowanie czasu umożliwi nam oszacowanie kosztów projektu. Efekty estymacji przedstawiamy Tobie podczas spotkania, gdzie podsumowujemy funkcjonalności, założenia, terminy i kroki milowe oraz koszty.",
      img: "/modeofaction/img6.svg",
    },
    {
      title: "Projektowanie graficzne",
      desc: "Po Twojej akceptacji i podpisaniu umowy zabieramy się za projektowanie graficzne. Specjaliści zajmą się nie tylko odpowiednią oprawą graficzną Twojej aplikacji webowej lub mobilnej, ale także przypilnują, aby Twój system był przyjazny i efektywny dla użytkowników (UX).",
      img: "/modeofaction/img7.svg",
    },
    {
      title: "Programowanie",
      desc: "Programowanie będzie bez wątpienia najdłuższym etapem. Przynajmniej raz w tygodniu otrzymasz od nas update wykonanych przez nas prac oraz dalszych kroków realizacji oprogramowania. Każda funkcjonalność jest przez nas dokładnie testowana zanim zostanie przekazana do Twojej weryfikacji.",
      img: "/modeofaction/img8.svg",
    },
    {
      title: "Publikacja aplikacji webowej lub mobilnej",
      desc: "Po Twojej weryfikacji całego oprogramowania na naszych serwerach roboczych i akceptacji poprawności, aplikacja zostanie przeniesiona na Twój docelowy serwer lub opublikowana w sklepach Google Play i AppStore.",
      img: "/modeofaction/img9.svg",
    },
    {
      title: "Rozwijamy, wspieramy",
      desc: "Tworzymy oprogramowanie tak aby gotowe rozwiązanie móc dalej rozwijać, ulepszać zgodnie z Twoimi potrzebami. Na działanie systemu udzielamy także 24 miesięcznej gwarancji. Możemy także prowadzić dla Ciebie ciągły support.",
      img: "/modeofaction/img10.svg",
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
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
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
    }});
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
                {item.button}
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
