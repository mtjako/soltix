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
      title: "Wypełnij formularz",
      desc: "Dzięki temu będziemy mieć podstawowe informacje o Twojej firmie lub pomyśle oraz wstępny zarys Twoich potrzeb, pomysłów lub opisu obszarów, które wymagają usprawnienia.",
      img: "/modeofaction/img1.svg",
      button: <Link href="/contact">
      <div>
        <Btn>UMÓW DARMOWE, GODZINNE WARSZTATY</Btn>
      </div>
    </Link>
    },
    {
      title: "Ustalimy dogodny termin oraz miejsce spotkania",
      desc: "Preferujemy spotkania on-line, aczkolwiek jeśli uważasz, że lepszym byłoby osobiste spotkanie w Twojej firmie nie będzie to dla nas problemem.",
      img: "/modeofaction/img2.svg",
    },
    {
      title: "Warsztaty - poznamy Twoją firmę, potrzeby i pomysły",
      desc: "Pierwsza część warsztatów to dla nas okazja, aby poznać obszary w których Twoja firma poszukuje wsparcia poprzez informatyzację, automatyzację lub digitalizację procesów lub poznać Twoje pomysły na aplikację webową lub mobilną. Następnie etapie przeanalizujemy także jakie rozwiązanie funkcjonalne będą najbardziej korzystne dla Ciebie.",
      img: "/modeofaction/img3.svg",
    },
    {
      title:
        "Warsztaty - stworzymy wizję rozwiązań oraz systemu",
      desc: "Druga część warsztatów to wspólne projektowanie oraz szkicowanie (dosłownie!) systemu. Przechodzimy przez kolejne ekrany, widoki i rozrysowujemy poszczególne funkcjonalności. Wspólne warsztaty i szkicowanie systemu dadzą Tobie gwarancję, że bardzo dobrze rozumiemy Twoje wymagania, co zmniejszy ryzyko błędów oraz konieczność kontaktów w trakcie budowy systemu.",
      img: "/modeofaction/img4.svg",
    },
    {
      title: "Stworzymy spis funkcjonalności",
      desc: "Po warsztatach, na podstawie zebranych informacji, rozmów i rozrysowanego oprogramowania, w ciągu kilku dni, przygotujemy wstępny spis funkcjonalności całego systemu. Następnie spis funkcjonalności wyślemy do Ciebie w celu weryfikacji i naniesienia ewentualnych dodatkowych poprawek lub uwag.",
      img: "/modeofaction/img5.svg",
    },
    {
      title: "Oszacujemy czas i koszty",
      desc: "Posiadając gotowy spis funkcjonalności przystąpimy do estymacji czasu realizacji całego projektu a co za tym idzie kosztów wykonania. Oszacujemy przede wszystkim czas jaki nasz zespół projektowy będzie potrzebował, aby stworzyć oprogramowanie. Efekty estymacji przedstawiamy Tobie podczas spotkania, podczas którego podsumujemy założenia, funkcjonalności, terminy i kroki milowe oraz koszty.",
      img: "/modeofaction/img6.svg",
    },
    {
      title: "Zaprojektujemy wygląd graficzny",
      desc: "Po Twojej akceptacji i podpisaniu umowy zabieramy się za projektowanie graficzne systemu. Specjaliści zajmą się nie tylko odpowiednią - schludną i przejrzystą - oprawą graficzną (UI) Twojej aplikacji webowej lub mobilnej, ale także przypilnują, aby Twój system był przyjazny i efektywny (UX) dla użytkowników.",
      img: "/modeofaction/img7.svg",
    },
    {
      title: "Stworzymy oprogramowanie",
      desc: "Programowanie będzie bez wątpienia najdłuższym etapem. Przynajmniej raz w tygodniu otrzymasz od nas aktualizację wykonanych przez nas prac oraz plan dalszych kroków realizacji. Każda stwworzona funkcjonalność jest przez nas dokładnie testowana zanim zostanie przekazana do Twojej weryfikacji.",
      img: "/modeofaction/img8.svg",
    },
    {
      title: "Uruchomimy system i/lub aplikację",
      desc: "Po Twojej weryfikacji całego oprogramowania znajdującego się na naszych serwerach roboczych i akceptacji poprawności działania, system zostanie przeniesiona na Twój docelowy serwer i uruchomiony. W przypadku aplikacji zostanie ona opublikowana w sklepach Google Play i AppStore.",
      img: "/modeofaction/img9.svg",
    },
    {
      title: "Będziemy wspierać i rozwijać",
      desc: "Po realizacji projektu zapewnimy 4-tygodniowe wsparcie wdrożeniowe. Oprócz tego zapewniamy również 24-miesięczną gwarancję na poprawne działanie wszystkich funkcjonalności systemu. Każde stworzone przez nas oprogramowanie jest tworzone w sposób modułowy co pozwala w przyszłości dalej je rozwijać i ulepszać zgodnie z Twoimi potrzebami.",
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
