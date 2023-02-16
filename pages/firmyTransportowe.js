import Head from "next/head";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import HeroTrans from "../components/home/HeroTrans";
import Questions from "../components/home/Questions";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
const data = [
  {
    image: "/home/questions/photo.svg",
    title:
      "Ulepszona logistyka",
    text: "Oprogramowanie dedykowane pomaga firmie transportowej w zoptymalizowaniu planowania tras, poprzez zintegrowanie systemu nawigacyjnego, map i prognoz pogody, co pozwala na oszczędność czasu i kosztów oraz minimalizuje ryzyko opóźnień w dostawach.",
  },
  {
    image: "/home/questions/photo2.svg",
    title:
      "Śledzenie ładunków i pojazdów",
    text: "Oprogramowanie “szyte na miarę” pozwala firmie transportowej na śledzenie pojazdów i ładunków w czasie rzeczywistym. Dzięki temu Twoja firma będzie mogła szybko reagować na wszelkie nieprzewidziane sytuacje, takie jak opóźnienia, wypadki lub awarie, co pozwoli na szybszą reakcję i zminimalizowanie problemów.",
  },
  {
    image: "/home/contact/process.svg",
    title: "Zarządzanie flotą",
    text: "Oprogramowanie stworzone “od zera” pomoże Twojej firmie transportowej w zarządzaniu flotą pojazdów, na przykład poprzez monitorowanie stanu technicznego pojazdów, przeglądów i napraw, co pozwoli na zapobieganie awariom i minimalizowanie ryzyka przestojów.",
  },
  {
    image: "/home/questions/photo.svg",
    title:
      "Zarządzanie dokumentacją",
    text: "Stworzone przez nas oprogramowanie pomoże Twojej firmie w zarządzaniu dokumentacją związaną z przewozami, taką jak faktury, umowy i listy przewozowe, co pozwoli na łatwiejsze, szybsze i bardziej przejrzyste zarządzanie dokumentami.",
  },
  {
    image: "/home/questions/photo2.svg",
    title:
      "Poprawa efektywności",
    text: "Oprogramowanie dedykowane pomoże w poprawie efektywności całej firmy transportowej, na przykład poprzez zminimalizowanie zużycia i kosztów paliwa, optymalizację tras, planowania dostaw, szybką wymianę dokumentów, dzięki czemu Twoja firma osiągnie lepsze wyniki finansowe.",
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
      <HeroTrans
        title="Firmy transportowe"
        subtitle=""
        subtitleGray="Oprogramowanie stworzone “od zera” realnie pomaga firmie transportowej w ulepszaniu logistyki, śledzeniu ładunków i pojazdów, zarządzaniu flotą, zarządzaniu dokumentacją oraz poprawie efektywności. Dzięki temu firma minimalizuje koszty, zwiększa wydajność i poprawia jakość obsługi klienta, co z kolei przekłada się na lepsze wyniki finansowe."
      />
      <Questions data={data} />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
