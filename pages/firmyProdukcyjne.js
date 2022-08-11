import Head from "next/head";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Distinctions from "../components/home/Distinctions";
import Hero from "../components/home/Hero";
import Questions from "../components/home/Questions";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
const data = [
  {
    title:
      "Wciąż dużo procesów w Twojej firmie produkcyjnej przetwarzanych jest na kartkach, różnych dokumentach lub w plikach excel?",
    text: "Przenieśmy procesy do łatwo dostępnej aplikacji webowej lub mobilnej. Każdy pracownik łatwo uzupełni niezbędne dane (np. raporty pracy, umowy z klientami, formularze). Wszystko będzie zebrane w chmurze i łatwo dostępne. A kadra zarządcza będzie miała możliwość większej kontroli przepływu procesów.",
    image: "/home/questions/photo.svg",
  },
  {
    title: "Potrzebujesz większej kontroli nad produkcją?",
    text: "Rozumiemy, że w Twojej firmie produkcyjnej dochodzi do wielu różnych i złożonych procesów. Niezależnie czy potrzebujesz system ERP czy wsparcie dla logistyki, zbudujemy oprogramowanie, które będzie posiadało dokładnie takie dane jakie potrzebujesz. Bez kompromisów lub zbędnych dodatków. Jako osoba zarządzająca otrzymasz system, który pozwoli Ci lepiej śledzić procesy, analizować statystykim, także te finansowe.",
    image: "/home/questions/photo3.svg",
  },
  {
    title: "Chcesz udostępnić swoim klientom dedykowaną aplikację",
    text: "Twoi klienci będą mogli zalogować się do dedykowanego panelu poprzez aplikację webową lub mobilną i łatwo dostarczać informacje, które Twoja firma przetwarza, np. dokumenty, formularze, śledzić statystyki, być w stałym kontakcie z Twoimi pracownikami, handlowcami.",
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
        title="Doradzamy firmom produkcyjnym w budowie aplikacji webowych i mobilnych. Tworzymy “szyte na miarę” oprogramowanie dla firm produkcyjnych."
        subtitle="Firmy produkcyjne"
      />
      <Distinctions title="Dlaczego jesteśmy idealnym partnerem dla firm produkcyjnych?" />
      <Questions data={data} />
      <CTASection />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}