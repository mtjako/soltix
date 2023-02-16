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
      "Zarządzanie dokumentami",
    text: "Oprogramowanie “szyte na miarę” pomaga w zarządzaniu dokumentami prawnymi, takimi jak umowy, protokoły i pisma procesowe. Dzięki temu można z łatwością przechowywać, organizować i przeszukiwać dokumenty, co pozwala na szybkie i łatwe odnalezienie potrzebnych informacji.",
  },
  {
    image: "/home/questions/photo2.svg",
    title:
      "Śledzenie spraw",
    text: "Oprogramowanie jakie możemy stworzyć może pomóc w śledzeniu postępów w sprawach prawniczych, dzięki czemu łatwiej jest kontrolować procesy oraz terminy i zobowiązania związane z daną sprawą. Oprogramowanie umożliwi także łatwiejsze zarządzanie danymi klientów, co zmniejszy nakład pracy pracowników kancelarii.",
  },
  {
    image: "/home/contact/process.svg",
    title: "Automatyzacja procesów",
    text: "Oprogramowanie dedykowane pomaga w automatyzacji procesów związanych z pracą kancelarii, takich jak tworzenie dokumentów, sporządzanie faktur czy raportów. Dzięki temu oszczędza się czas i zwiększa efektywność pracy kancelarii.",
  },
  {
    image: "/home/questions/photo2.svg",
    title:
      "Analiza danych",
    text: "Nasze oprogramowanie jakie możemy stworzyć dla kancelarii prawnej pomoże w analizie danych, takich jak koszty prowadzenia spraw i uzyskane dochody, co pozwoli na dokładne monitorowanie finansów kancelarii. Może też pomóc w identyfikacji wzorców i tendencji, które pomogą w podejmowaniu bardziej świadomych decyzji biznesowych.",
  },
  {
    image: "/home/contact/process.svg",
    title: "Bezpieczeństwo danych",
    text: "Oprogramowanie “szyte na miarę” zabezpiecza dane prawnicze przed nieautoryzowanym dostępem, utratą lub uszkodzeniem. Dzięki temu zapewnia ochronę poufnych informacji klientów oraz zgodność z przepisami dotyczącymi ochrony danych osobowych.",
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
        title="Kancelaria prawna"
        subtitle=""
        subtitleGray="Oprogramowanie tworzone “szyte na miarę” pomaga kancelarii prawnej w tworzeniu i zarządzaniu dokumentami, automatyzacji procesów, śledzeniu spraw, analizie danych oraz zapewnieniu ich  bezpieczeństwa. Dzięki temu zwiększa się efektywność pracy kancelarii, minimalizuje się czas i koszty pracy oraz poprawia się jakość obsługi klienta."
      />
      <Questions data={data} />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
