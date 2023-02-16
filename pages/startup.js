import Head from "next/head";
import Contact from "../components/home/Contact";
import CTASection from "../components/home/CTASection";
import Questions from "../components/home/Questions";
import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";
import Header from "../components/layout/Header";

const data = [
  {
    title: "Wiedza techniczna i doświadczenie",
    text: "Nasz software house posiada specjalistów z różnych obszarów IT, którzy posiadają niezbędną wiedzę i doświadczenie. Dzięki temu potrafimy opracować, stworzyć i wdrożyć skuteczne rozwiązania programistyczne, które umożliwią bezproblemowe i bezstresowe zrealizowanie Twojego pomysłu na startup.",
    image: "/home/questions/photo.svg",
  },
  {
    title: "Minimalizacja czasu i kosztów",
    text: "Współpraca z nami pomoże w znacznym zmniejszeniu czasu potrzebnego do opracowania i wdrożenia oprogramowania, a co za tym idzie również i kosztów. Dzięki korzystaniu ze sprawdzonych narzędzi do tworzenia oprogramowania, zaoszczędzimy Twój czas i pieniądze potrzebne na wdrożenie Twojego pomysłu.",
    image: "/home/questions/photo3.svg",
  },
  {
    title: "Skalowalność biznesu",
    text: "Nasz software house pomoże Tobie w zaprojektowaniu i wdrożeniu aplikacji, która będzie skalowalna i przygotowany do szybkiego rozwoju wraz z rozwojem firmy i Twoich dalszych planów. To oznacza, że Twój startup będzie miał możliwość rozwijania swojego produktu, w miarę jak będzie rosła liczba użytkowników.",
    image: "/home/questions/photo2.svg",
  },
  {
    title: "Wsparcie techniczne",
    text: "Współpraca z SOLTIX Software House zapewni Tobie wsparcie techniczne na każdym etapie rozwoju aplikacji. Nasi specjaliści będą pracować na bieżąco nad rozwiązywaniem ewentualnych problemów technicznych i dbać o to, aby Twój system działał bez zakłóceń.",
    image: "/home/questions/photo2.svg",
  },
  {
    title: "Dostęp do nowych technologii",
    text: "Nasz software house jest zorientowany na najnowsze trendy i technologie, co oznacza, że Twój startup, już od etapu planowania, będzie miał dostęp do najnowszych narzędzi oprogramowania, które przyniosą korzyści dla rozwoju Twojego produktu.",
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
        title="Nie jesteśmy firmą, która po prostu “zaprogramuje” Twój pomysł. Doradzimy Tobie jak jak zaplanować MVP i stworzyć dobrą, efektywną i atrakcyjną pod względem UI/UX aplikację mobilną lub webową."
        subtitle=""
        subtitleGray=""
      />
      <Header
        title="Dlaczego jesteśmy idealnym partnerem dla osób posiadających pomysł na start-up?"
        center
      />
      <Questions data={data} />
      <CTASection title="Masz pomysł na start-up, ale nie wiesz jak za to się zabrać? " />
      <Contact />
      <Footer />
    </div>
  );
}
