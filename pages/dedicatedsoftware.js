import Head from "next/head";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import Accordeon from "../components/layout/Accordeon";
import Header from "../components/layout/Header";
import Wrapper from "../components/layout/Wrapper";
import Section from "../components/layout/Section";

export default function DedicatedSoftware() {
  const faqdata = [
    {
      title: "Kompleksowe zarządzanie danymi",
      desc: "Oprogramowanie stworzone zgodnie z potrzebami i wymaganiami pozwala w łatwy sposób obserwować i zarządzać wybranymi procesami w firmie. Dzięki temu firma unika luk informacyjnych i optymalnie zarządza zasobami wewnętrznymi.",
    },
    {
      title: "Przejrzysta analiza informacji",
      desc: "Dedykowane oprogramowanie umożliwia wydobycie wybranych informacji o procesach zachodzących w firmie i przedstawienie ich na wiele sposobów - przede wszystkim łatwych i przejrzystych dla interpretacji przez osobę decyzyjną.",
    },
    {
      title: "Podejmuj decyzje łatwiej i szybciej",
      desc: "Dzięki pozyskanym informacjom – odpowiednio przetworzonym i wyselekcjonowanym przez oprogramowanie – osoby zarządzające wybranymi procesami w firmie mogą łatwiej i szybciej podejmować właściwe decyzje.",
    },
  ];
  return (
    <>
      <Head>
        <title>Soltix - Oprogramowanie na zamówienie</title>
        <meta name="description" content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!" />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Section
        subtitle="Dlaczego"
        title="Oprogramowanie na zamówienie"
        desc="W dzisiejszych czasach „przeniesienie” zarządzania i przetwarzania danych do świata cyfrowego wydaje się być nie tylko wygodą, ale wręcz potrzebą dla każdego, kto chce optymalnie usprawnić działanie wielu złożonych procesów w swojej organizacji. Niezależnie od tego, czy potrzebujesz łatwiejszej realizacji zamówień w małym sklepie internetowym, czy wielopoziomowego przetwarzania danych w dużej organizacji, stworzymy dla Ciebie i Twojej firmy przejrzyste i intuicyjne, a przede wszystkim skuteczne oprogramowanie, idealnie „uszyte na miarę”!"
        img="/offer/why.png"
        noscroll
      />
      <Section
        subtitle="Zarządzanie"
        title="Czego potrzebujesz"
        desc="Jeśli prowadzisz firmę lub jakąkolwiek organizację i zarządzasz nią lub którymkolwiek z jej obszarów, nasza propozycja jest dla Ciebie idealna! Tworzymy oprogramowanie dokładnie takie jak chcesz, zawierające tylko te funkcje, które są potrzebne do efektywnego zarządzania organizacją lub jej poszczególnymi procesami. Nie musisz więc wybierać spośród drogich dużych programów do zarządzania z mnóstwem funkcji, których nigdy nie użyjesz, a których wdrożenie i nauka są długie i skomplikowane. Od nas dostajesz tylko to czego potrzebujesz - bez zbędnych dodatków, komplikacji w użytkowaniu i przerośniętej formy."
        img="/offer/for.png"
        left
      />
      <Accordeon
        data={faqdata}
        subtitle={"FAQ"}
        title={"Korzyści"}
        desc={
          "Dla każdego menedżera lub osoby decyzyjnej odpowiednio przetworzone i należycie przedstawione dane są kluczem do podjęcia najlepszej decyzji. Każde oprogramowanie tworzone od podstaw musi dostarczać czytelnych danych w sposób wymagany przez charakterystykę pętli decyzyjnej w firmie."
        }
      />
      <Footer />
    </>
  );
}
