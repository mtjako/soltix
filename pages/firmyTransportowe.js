import Head from "next/head";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Distinctions from "../components/home/Distinctions";
import Hero from "../components/home/Hero";
import Questions from "../components/home/Questions";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
const data = [
  {
    title: "Płacisz sporo za gotowe oprogramowanie dla firm transportowych?",
    text: "Ponad 85% firm transportowych, decyduje się na współpracę z nami, ponieważ płacą wysokie opłaty miesięczne za korzystanie z gotowych oprogramowań dla firm transportowych lub zauważają zbyt duże skomplikowanie systemów gotowych, które posiadają zbędne dla nich funkcjonalności, albo brakuje istotnych dla nich możliwości. Firmy transportowe decydują się na współpracę z nami, aby nie być zobowiązanym do miesięcznych opłat ograniczonych np. liczbą użytkowników i także, aby posiadać własne, niezależne oprogramowanie.",
    image: "/home/questions/photo.svg",
  },
  {
    title:
      "Pewnie wciąż dużo procesów w Twojej firmie jest przetwarzanych na kartkach, arkuszach kalkulacyjnych lub innych dokumentach…",
    text: "Przenieśmy więc procesy do łatwo dostępnej aplikacji webowej lub mobilnej. Każdy pracownik łatwo wprowadzi niezbędne dane a wszystko zostanie zebrane w chmurze i będzie łatwo dostępne, np.: kadrze zarządczej, której umożliwi natychmiastowy dostęp do informacji co zwiększy kontrolę przepływu procesów.",
    image: "/home/questions/photo3.svg",
  },
  {
    title: "Potrzebujesz większej kontroli nad flotą?",
    text: "Rozumiemy, że w Twojej firmie transportowej spedytorzy muszą mieć łatwą kontrolę nad zleceniami a logistycy nad frachtami. Zbudujemy oprogramowanie, które będzie posiadało dokładnie takie dane jakie potrzebujesz. Bez kompromisów lub zbędnych dodatków. Jako osoba zarządzająca otrzymasz system, który pozwoli Ci lepiej śledzić ewentualne opóźnienia, koszty, analizować statystykim, także te finansowe.",
    image: "/home/questions/photo2.svg",
  },
  {
    title: "Chciałbyś umożliwić dostęp do aplikacji swoim klientom?",
    text: "Twoi klienci będą mogli zalogować się do dedykowanego panelu poprzez aplikację webową lub mobilną i łatwo dostarczać informacje, które Twoja firma przetwarza, np. listy przewozowe, dokumenty, formularze, śledzić statystyki lub monitorować etap transportu, być w stałym kontakcie z Twoimi pracownikami, handlowcami.",
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
        title="Doradzamy firmom transportowym w budowie aplikacji webowych i mobilnych. Tworzymy “szyte na miarę” oprogramowanie dla firm transportowych i spedycyjnych."
        subtitle="Firmy transportowe"
      />
      <Distinctions title="Dlaczego jesteśmy idealnym partnerem dla firm transportowych i spedycyjnych?" />
      {/* <Questions data={data} /> */}
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
