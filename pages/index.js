import Head from "next/head";
import About from "../components/home/About";
import BuildForYou from "../components/home/BuildForYou";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Distinctions from "../components/home/Distinctions";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Questions from "../components/home/Questions";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";

const data = [
  {
    title:
      "Wciąż dużo procesów w Twojej firmie przetwarzanych jest na kartkach, różnych dokumentach lub excelach?",
    text: "Przenieśmy procesy do łatwo dostępnej aplikacji webowej lub mobilnej. Każdy pracownik łatwo uzupełni niezbędne dane (np. raporty pracy, umowy z klientami, formularze). Wszystko będzie zebrane w chmurze i łatwo dostępne. Managment’owi umożliwi także dostęp do większej kontroli przepływu procesów.",
    image: "/home/questions/photo.svg",
  },
  {
    title: "Chcesz udostępnić swoim klientom dedykowaną aplikację?",
    text: "Twoi klienci będą mogli zalogować się do dedykowanego panelu poprzez aplikację webową lub mobilną i łatwo dostarczać informacje, które Twoja firma przetwarza, np. dokumenty, formularze, śledzić statystyki wykonania zadań, być w stałym kontakcie z Twoimi pracownikami.",
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
        title="Doradzamy i tworzymy oprogramowanie “szyte na miarę” dla&nbsp;B2B oraz start-up’ów"
        subtitle="SOLTIX SOFTWARE HOUSE"
        main
      />
      <Distinctions title="Dlaczego jesteśmy idealnym partnerem dla B2B?" />
      {/* <About /> */}
      <Questions data={data} />
      <CTASection />
      <BuildForYou />
      <Team />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
