import Head from "next/head";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Hero from "../components/home/Hero";
import Questions from "../components/home/Questions";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
import Header from "../components/layout/Header";
const data = [
  {
    image: "/home/questions/photo.svg",
    title: "Automatyzacja procesów magazynowych",
    text: "Oprogramowanie “szyte na miarę” pomaga w automatyzacji procesów magazynowych, takich jak przyjmowanie towarów, ich składowanie, przetwarzanie zamówień, kompletacja i wysyłka. Dzięki temu znacznie zwiększa wydajność i dokładność pracy, a także minimalizuje ryzyko pomyłek.",
  },
  {
    image: "/home/questions/photo2.svg",
    title: "Zarządzanie stanami magazynowymi",
    text: "Oprogramowanie dedykowane pomoże w monitorowaniu stanów magazynowych, co umożliwi bieżącą aktualizację stanu magazynu i przepływu towarów. Ułatwi to zarządzanie zapasami i pomoże uniknąć braków towarów, co z kolei przełoży się na zadowolenie klientów.",
  },
  {
    image: "/home/contact/process.svg",
    title: "Optymalizacja przestrzeni magazynowej ",
    text: "Oprogramowanie tworzone “od zera” pomaga w optymalizacji przestrzeni magazynowej poprzez wykorzystanie wprowadzonych danych, zaawansowanych algorytmów i analiz danych. Dzięki temu optymalizuje układ zajętości regałów i półek w magazynie, co pozwala na efektywniejsze wykorzystanie powierzchni i minimalizację kosztów.",
  },
  {
    image: "/home/questions/photo.svg",
    title: "Kontrola jakości",
    text: "Tworzone przez nas oprogramowanie może pomóc w kontroli jakości produktów składowanych w magazynie, na przykład poprzez kontrolę dat ważności i śledzenie partii produktów. Dzięki temu tylko produkty o dobrej jakości będą dostarczane klientom.",
  },
  {
    image: "/home/questions/photo2.svg",
    title: "Zarządzanie zamówieniami i przesyłkami",
    text: "Oprogramowanie “szyte na miarę” pomaga w zarządzaniu zamówieniami i przesyłkami, na przykład poprzez automatyczne generowanie etykiet i dokumentów przewozowych. Powoduje to minimalizację czasu potrzebnego na przygotowanie zamówień do wysyłki i poprawia jakość obsługi klienta.",
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
        title="Firmy magazynowe"
        subtitle=""
        subtitleGray="Oprogramowanie stworzone “od zera” realnie pomaga firmie transportowej w ulepszaniu logistyki, śledzeniu ładunków i pojazdów, zarządzaniu flotą, zarządzaniu dokumentacją oraz poprawie efektywności. Dzięki temu firma minimalizuje koszty, zwiększa wydajność i poprawia jakość obsługi klienta, co z kolei przekłada się na lepsze wyniki finansowe."
      />
      <Header
        title="Dlaczego jesteśmy idealnym partnerem dla firm magazynowych?"
        center
      ></Header>
      <Questions data={data} />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
