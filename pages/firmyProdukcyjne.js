import Head from "next/head";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Hero from "../components/home/Hero";
import Questions from "../components/home/Questions";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
const data = [
  {
    image: "/home/questions/photo.svg",
    title:
      "Automatyzacja procesów produkcyjnych",
    text: "Oprogramowanie ściśle dostosowane do specyfiki działalności Twojej firmy produkcyjnej pozwoli na zautomatyzowanie wielu procesów, co z kolei przyspieszy całą produkcję i zminimalizuje możliwość ewentualnych odchyleń od założonych norm oraz popełnienia błędów.",
  },
  {
    image: "/home/questions/photo2.svg",
    title:
      "Poprawa kontroli nad produkcją",
    text: "Dedykowane oprogramowanie tworzone “od zera” umożliwi Tobie łatwiejsze monitorowanie procesów produkcyjnych na każdym ich etapie - od stworzenia koncepcji po wysłanie finalnego produktu do klienta. Pozwoli także na szybką reakcję osób decyzyjnych na ewentualne problemy i błędy.",
  },
  {
    image: "/home/contact/process.svg",
    title: "Optymalizacja zarządzania danymi.",
    text: 'Oprogramowanie "szyte na miarę" pomoże w gromadzeniu, przetwarzaniu i analizowaniu wszelkich danych związanych z produkcją. Dzięki temu Twoja firma będzie mogla dokładnie śledzić, jakie procesy produkcyjne przynoszą najlepsze wyniki i na tej podstawie podejmować strategiczne decyzje.',
  },
  {
    image: "/home/contact/process.svg",
    title: "Poprawa efektywności i wydajności",
    text: 'Zastosowanie stworzonego przez nas oprogramowania pozwoli na lepszą koordynację prac pomiędzy różnymi działami w firmie. To z kolei, np. poprzez natychmiastową wymianę informacji, bezpośrednio przełoży się na zwiększenie efektywności i wydajności całego Twojej firmy.',
  },
  {
    image: "/home/contact/process.svg",
    title: "Redukcja kosztów",
    text: 'Na bazie naszych doświadczeń wiemy, że oprogramowanie "szyte na miarę" pomoże w minimalizacji kosztów produkcji, na przykład poprzez optymalizację zarządzania zasobami ludzkimi, zarządzania stanami zamówień, zapasów czy też zmniejszenie ilości odpadów.',
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
          name="textription"
          content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!"
        />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Hero
        title="Firmy produkcyjne"
        subtitle=""
        subtitleGray="Zastosowanie dedykowanego oprogramowania “szytego na miarę” przyniesie Twojej firmie wiele korzyści, zwłaszcza jeśli chodzi o automatyzację procesów, poprawę kontroli nad produkcją, optymalizację zarządzania danymi, poprawę efektywności oraz wydajności i redukcję kosztów."
      />
      <Questions data={data} />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
