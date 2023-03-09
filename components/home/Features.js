import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faBoxesStacked,
  faBusinessTime,
  faCartShopping,
  faCircleInfo,
  faFolderTree,
  faMoneyBill1Wave,
  faPeopleGroup,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../layout/Header";

export default function Features() {
  const tileData = [
    {
      img: faBusinessTime,
      title: "Rozwiązania Business-to-Business",
      desc: "Oprogramowanie B2B ułatwia wymianę informacji pomiędzy firmami poprzez np. cykliczne wysyłanie korespondencji, automatyczne tworzenie i wysyłanie zleceń, wystawianie i wysyłanie faktur, automatyczne przypominanie o zaległej płatności, itp.",
    },
    {
      img: faCartShopping,
      title: "Rozwiązania Business-to-Consumer",
      desc: "B2C to wymiana informacji pomiędzy firmą a jej klientem indywidualnym, poprzez np. automatyczną wysyłkę potwierdzenia zakupu, informowanie na bieżąco o stanie zamówienia, wypełnianie listów przewozowych w oparciu o szablon firmy kurierskiej, wysłanie prośby o informację zwrotną, e-mailing, itd.",
    },
    {
      img: faArrowUpRightDots,
      title: "Enterprise Resource Planning",
      desc: "Systemy ERP pomagają w planowaniu efektywnego wykorzystania zasobów firmy np. w ułożeniu optymalnego harmonogramu pracy dla pracowników, nadzorowania wykorzystania floty samochodów czy skutecznego wykorzystania zasobów produkcyjnych.",
    },
    {
      img: faPeopleGroup,
      title: "Customer Relationship Management",
      desc: "System CRM pomaga pozyskać nowych oraz utrzymać stały i efektywny kontakt z posiadanymi już klientami. Jego zadaniem jest gromadzenie i przetwarzanie informacji o kliencie oraz umożliwienie pełnej i kompleksowej obsługi, również w sposób zautomatyzowany.",
    },
    {
      img: faBoxesStacked,
      title: "Order Management Systems",
      desc: "Systemy OMS służą do przyjmowania i przetwarzania zamówień. Ułatwiają realizację zamówień zarówno podczas ich ręcznej obsługi przez pracowników jak i w pełni automatyczną obsługę zamówień składanych np. on-line, tak aby samoczynnie przekazać je do realizacji i wysyłki.",
    },
    {
      img: faFolderTree,
      title: "Document Management Systems",
      desc: "Oprogramowanie z kategorii DMS służy do tworzenia oraz wymiany dokumentacji w firmie. Dzięki niemu odpowiednie dokumenty, w odpowiednim czasie trafią do odpowiednich osób. DMS zapewnia porządek, bezpieczeństwo wymiany dokumentów wewnątrz firmy, a także z podmiotami zewnętrznymi.",
    },
    {
      img: faVrCardboard,
      title: "Rzeczywistość Rozszerzona (AR)",
      desc: "Oprogramowanie wspierające sprzedaż, przeznaczone dla producentów, handlowców oraz projektantów. Dzięki aplikacji i/lub widgetowi AR potencjalny klient może zobaczyć wybrany produkt na ekranie swojego smartfona w realnej rzeczywistości, np. stojący w jego domu, ogrodzie, itp.",
    },
    {
      img: faCircleInfo,
      title: "Systemy Wymiany Informacji",
      desc: "To wszelakie systemy stworzone wg sprecyzowanych potrzeb do wymiany informacji pomiędzy poszczególnymi działami lub obszarami organizacji. Sprawiają, że osoby zarządzające mogą otrzymywać odpowiednie dane we właściwym czasie. Dzięki nim zarządzanie firmą jest szybsze i łatwiejsze.",
    },
    {
      img: faMoneyBill1Wave,
      title: "Systemy Podstawowej Analizy Finansowej",
      desc: "Systemy wsparcia analiz finansowych pomagają przedsiębiorcom oraz osobom zarządzającym we właściwej interpretacji kondycji finansowej w firmach. Oprócz najzwyklejszego bilansu przychodów i rozchodów pomagają w analizie płynności oraz prezentacji wskaźników finansowych i w prognozach.",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  const TitleRef = useRef(null);
  const TextRef = useRef(null);
  const WrapRef = useRef(null);
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
      const currentElement = String((index / 3 + "").split(".")[1])[0];
      let current;
      switch (currentElement) {
        case "6":
          current = 2;
          break;
        case "3":
          current = 1;
          break;
        default:
          current = 0;
          break;
      }

      ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              scrub: true,
              immediateRender: false,
              start: `${(current + 1) * 2 + "0%"} 75%`,
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
          trigger: WrapRef.current,
          start: "40% bottom",
          end: "bottom bottom",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
    //TEXT SHOW
    gsap.fromTo(
      TextRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: WrapRef.current,
          start: "50% bottom",
          end: "bottom bottom",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TextRef.current, { x: "0" });
  }, []);
  return (
    <Wrapper>
      <FeaturesWrapperText ref={WrapRef}>
        <div ref={TitleRef}>
          <Header
            subtitle=""
            title="Dziedziny, których jesteśmy najbardziej doświadczeni"
            center
          />
        </div>
        <p ref={TextRef}>
        Na Państwa życzenie możemy stworzyć dowolne oprogramowanie. <br/> Oto kilka przykładów:
        </p>
      </FeaturesWrapperText>
      <Tiles ref={TilesRef}>
        {tileData.map((tile, index) => (
          <Tile key={index} ref={addToRefs}>
            <FontAwesomeIcon icon={tile.img} className="icon" />
            <div>
              <h4>{tile.title}</h4>
              <p>{tile.desc}</p>
            </div>
          </Tile>
        ))}
      </Tiles>
    </Wrapper>
  );
}

const FeaturesWrapperText = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-bottom: 32px;
  p {
    font-size: 16px;
    font-weight: 400;
    color: #696969;
    text-align: center;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Tiles = styled.div`
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

const Tile = styled.div`
  box-shadow: 0px 7px 20px 0px rgb(42 22 139 / 8%);
  padding: 30px 20px;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .icon {
    width: 50px;
    height: 50px;
    margin-right: 25px;
    @media (max-width: 1000px) {
      margin-right: 0px;
      margin-bottom: 25px;
    }
    color: ${(props) => props.theme.blue500};
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
