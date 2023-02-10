import Head from "next/head";
import About from "../components/home/About";
import BuildForYou from "../components/home/BuildForYou";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Distinctions from "../components/home/Distinctions";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import { Logos } from "../components/home/Logos";
// import Questions from "../components/home/Questions";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
import { Techs } from "../components/home/TechSlider";

const data = [
  {
    title:
      "Pewnie wciąż dużo procesów w Twojej firmie jest przetwarzanych na kartkach, arkuszach kalkulacyjnych lub innych dokumentach…",
    text: "Przenieśmy więc procesy do łatwo dostępnej aplikacji webowej lub mobilnej. Każdy pracownik łatwo wprowadzi niezbędne dane a wszystko zostanie zebrane w chmurze i będzie łatwo dostępne, np.: kadrze zarządczej, której umożliwi natychmiastowy dostęp do informacji co zwiększy kontrolę przepływu procesów.",
    image: "/home/questions/photo.svg",
  },
  {
    title: "Chciałbyś umożliwić dostęp do aplikacji swoim klientom?",
    text: "Twoi klienci będą mogli zalogować się do dedykowanego panelu poprzez aplikację webową lub mobilną i łatwo dostarczać lub sprawdzić informacje, które Twoja firma im udostępni. Dzięki temu Twoi kontrahenci będą mieli dostęp np. do dokumentów czy formularzy. Będą mogli śledzić statystyki wykonywanych zadań oraz być w stałym kontakcie z Twoimi pracownikami.",
    image: "/home/questions/photo2.svg",
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
      <Distinctions title="Dlaczego jesteśmy idealnym partnerem dla Ciebie lub Twojej firmy?" />
      <Logos />
      {/* <Questions data={data} /> */}
      <CTASection />
      <BuildForYou />
      <Features />
      <Contact />
      <Techs />
      <Footer />
    </div>
  );
}
