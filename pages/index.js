import Head from "next/head";
import Questions from "../components/home/Questions";
import BuildForYou from "../components/home/BuildForYou";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Header from "../components/layout/Header";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import { Logos } from "../components/home/Logos";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
import { Techs } from "../components/home/TechSlider";

const data = [
  {
    image: "/home/questions/photo.svg",
    title: "Komunikacja",
    text: "Oprogramowanie ściśle dostosowane do specyfiki działalności Twojej firmy produkcyjnej pozwoli na zautomatyzowanie wielu procesów, co z kolei przyspieszy całą produkcję i zminimalizuje możliwość ewentualnych odchyleń od założonych norm oraz popełnienia błędów.",
  },
  {
    image: "/home/questions/photo2.svg",
    title: "Warsztaty",
    text: "Dedykowane oprogramowanie tworzone “od zera” umożliwi Tobie łatwiejsze monitorowanie procesów produkcyjnych na każdym ich etapie - od stworzenia koncepcji po wysłanie finalnego produktu do klienta. Pozwoli także na szybką reakcję osób decyzyjnych na ewentualne problemy i błędy.",
  },
  {
    image: "/home/contact/process.svg",
    title: "Proces",
    text: 'Oprogramowanie "szyte na miarę" pomoże w gromadzeniu, przetwarzaniu i analizowaniu wszelkich danych związanych z produkcją. Dzięki temu Twoja firma będzie mogla dokładnie śledzić, jakie procesy produkcyjne przynoszą najlepsze wyniki i na tej podstawie podejmować strategiczne decyzje.',
  },
  {
    image: "/home/contact/process.svg",
    title: "Efekt",
    text: "Zastosowanie stworzonego przez nas oprogramowania pozwoli na lepszą koordynację prac pomiędzy różnymi działami w firmie. To z kolei, np. poprzez natychmiastową wymianę informacji, bezpośrednio przełoży się na zwiększenie efektywności i wydajności całego Twojej firmy.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          SOLTIX - oprogramowania dedykowane - ERP, CRM, B2B, B2C, OMS, DMS, AR
        </title>
        <meta
          name="description"
          content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!"
        />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Hero
        title="Doradzamy i tworzymy oprogramowanie “szyte na miarę” dla firm oraz start-upów"
        subtitle=""
        main
      />
      <Header
        title="Dlaczego jesteśmy idealnym partnerem dla firm produkcyjnych?"
        center
      ></Header>
      <Questions data={data} />
      <Logos />
      <CTASection />
      <BuildForYou />
      <Features />
      <Contact />
      <Techs />
      <Footer />
    </div>
  );
}
