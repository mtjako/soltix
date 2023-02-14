import Head from "next/head";
import Accordeon from "../components/layout/Accordeon";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import Wrapper from "../components/layout/Wrapper";
import ContactTop from "../components/contact/ContactTop";
import ContactBottom from "../components/contact/ContactBottom";
import ContactForm from "../components/contact/ContactForm";
import { useState, useEffect } from "react";
import FormData from "form-data";
import ContactEnd from "../components/contact/ContactEnd";

export default function Contact() {
  const contactData = [
    {
      title: "Co mi dadzą warsztaty?",
      desc: "Warsztaty pozwolą Ci uporządkować plany i pomysły związane z oprogramowaniem. Ułatwią Ci przejście przez cały proces tworzenia oprogramowania - po warsztatach będziesz uzbrojony w dokumentację (specyfikację wymagań) porządkującą wszystkie założenia, a także szkic (flow) funkcjonalności, widoków, ekranów oraz elementów oprogramowania.",
    },
    {
      title: "Dlaczego warto zrobić warsztaty właśnie z nami?",
      desc: "W większości software house’ów takie warsztaty kosztują parę tysięcy i nazywane są “Discovery Call”. Jeśli już są darmowe to bardzo często przypominają rozmowę handlową i więcej usłyszysz o “wspaniałości” danego software house’u niż faktycznie zidentyfikujesz problemy i potrzeby w swojej firmie. Podczas naszych warsztatów zawsze staramy się rysować oprogramowanie (u naszej konkurencji często odbywa się to dopiero po podpisaniu umowy), a to da Tobie (i nam) niesamowitą możliwość zrozumienia czego naprawdę oczekujesz od swojego oprogramowania.",
    },
    {
      title: "Dlaczego warsztaty są darmowe?",
      desc: "To jest nasza inwestycja. Wierzymy, że dobre zrozumienie potrzeb i także rozrysowanie oprogramowania znacznie poprawi naszą wydajność w kolejnych etapach procesu programowania, zredukuje poprawki i zminimalizuje ewentualne nieporozumienia. Warsztaty mają też zagwarantować Tobie bezpieczeństwo, pozwolą Tobie poznać nas i nasze kompetencje. Wierzymy, że po warsztatach z nami stwierdzisz: “Tak, ci ludzie znają moją branżę, moje potrzeby i wiedzą czego oczekuję.”",
    },
  ];
  const formTemplate = [
    {
      type: "welcome",
      title: "Umów darmowe warsztaty",
      data: [
        `
        <p>Zanim się spotkamy, odpowiedz nam na kilka pytań. Zajmie Ci to <b>około 1 minutę.</b></p>
        <p>Podczas warsztatów poznamy Twoją firmę lub pomysł na serwis. Określimy możliwości, zidentyfikujemy problemy i obszary, które wymagają cyfrowej automatyzacji. Przeprowadzimy także wstępny szkic (tak, narysujemy go!) oprogramowania, a Ty będziesz miał okazję poznać nasze kompetencje.</p>
        <p>Warsztaty są całkowicie darmowe i potrwają około 1h.</p>
        `,
      ],
    },
    {
      type: "radio",
      title: "Powiedz nam czego szukasz lub potrzebujesz*",
      data: [
        "Szukam usprawnienia dla firmy",
        "Potrzebuję wsparcia w tworzeniu start-up’u",
      ],
    },
    {
      type: "textareaFile",
      title:
        "Jeśli na tym etapie potrafisz określić obszary lub procesy wymagające automatyzacji lub digitalizacji w Twojej firmie, krótko je opisz. Jeśli masz pomysł na startup w tym miejscu napisz kilka słów o swoim pomyśle. Możesz też dodać plik z opisem lub specyfikacją.",
      data: [
        "describe",
        "file",
      ],
      data2: [
        {
          type: "checkbox",
          name: "Czy przed udzieleniem szerszych informacji chcesz podpisać z nami NDA?",
          required: false,
        },
      ],
    },
    {
      type: "radio",
      title: "Ile osób pracuje w firmie?*",
      data: ["1-9", "10-19", "20-49", "50-100", "ponad 100"],
    },
    {
      type: "radio",
      title:
        "Jaki budżet Twoja firma lub Ty jesteś w stanie przeznaczyć na budowę oprogramowania?",
      data: [
        "Do 50k PLN netto",
        "50k - 100k PLN netto",
        "100k - 150k PLN netto",
        "150k - 200k PLN netto",
        "pow. 200k PLN netto",
        "Nie chcę udzielać tej informacji na tym etapie",
      ],
    },
    {
      type: "radio",
      title: "Preferowana forma warsztatów*",
      data: ["Spotkanie osobiste", "Spotkanie on-line"],
    },
    {
      type: "textarea",
      title: "Podaj proszę preferowany termin oraz godzinę warsztatów*",
      data: ["describe"],
    },
    {
      type: "input",
      title: "Zostaw nam swoje dane kontaktowe",
      data: [
        { type: "text", name: "Imię*", required: true },
        { type: "text", name: "Nazwisko*", required: true },
        { type: "text", name: "Nazwa firmy", required: false },
        { type: "text", name: "Stanowisko*", required: true },
        { type: "email", name: "E-mail*", required: true },
        { type: "text", name: "Numer telefonu*", required: true },
      ],
    },
  ];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState([]);
  const [formDataFile, setFormDataFile] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify([]));
  }, []);
  const save = () => {
    const form = document.querySelector("form");
    //WELCOME
    if (formTemplate[step].type === "welcome") {
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = ["welcome"];
      localStorage.setItem("form", JSON.stringify(element));
    }
    //CHECKBOX
    else if (formTemplate[step].type === "checkbox") {
      const formData = form.querySelectorAll("input[type=checkbox]:checked");
      if (formData.length === 0) return 1;
      const arr = [];
      formData.forEach((item) => {
        arr.push(item.id);
      });
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = arr;
      localStorage.setItem("form", JSON.stringify(element));
    }
    //TEXTAREA
    else if (formTemplate[step].type === "textarea" && step != 5) {
      const formData = form.querySelector("textarea");
      if (formData.value.length === 0) return 1;
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = formData.value;
      localStorage.setItem("form", JSON.stringify(element));
    }
    //TEXTAREAFILE
    else if (formTemplate[step].type === "textareaFile") {
      const formData = form.querySelectorAll(
        "textarea,input[type=file],input[type=checkbox]"
      );
      // if (formData[0].value.length === 0) return 1;
      const arr = [];
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = arr;
      let isEmpty = 0;
      formData.forEach((item) => {
        if (item.type == "checkbox") {
          arr.push(item.checked);
        } else {
            isEmpty == 0 ? (isEmpty = 1) : "";
          arr.push(item.value);
        }
      });
      if (formData[1].files.length != 0) {
        setFormDataFile(formData[1].files);
      }
      localStorage.setItem("form", JSON.stringify(element));
    }
    //RADIO
    else if (formTemplate[step].type === "radio") {
      const formData = form.querySelector("input[type=radio]:checked");
      if (formData === null) return 1;
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = formData.id;
      localStorage.setItem("form", JSON.stringify(element));
    }
    //INPUT
    else if (formTemplate[step].type === "input") {
      const formData = form.querySelectorAll(
        "input[type=text],input[type=email],input[type=checkbox]"
      );
      const arr = [];
      let isEmpty = 0;
      formData.forEach((item) => {
        if (item.type == "checkbox") {
          arr.push(item.checked);
        } else if (item.type == "email") {
          if (item.value.length === 0) isEmpty == 0 ? (isEmpty = 1) : "";
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(item.value)) {
            isEmpty == 0 ? (isEmpty = 1) : "";
          } else {
            arr.push(item.value);
          }
        } else {
          if (item.required && item.value.length === 0)
            isEmpty == 0 ? (isEmpty = 1) : "";
          arr.push(item.value);
        }
      });
      if (isEmpty == 1) return 1;
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = arr;
      localStorage.setItem("form", JSON.stringify(element));
    }
  };

  const prev = () => {
    save();
    setFormData(JSON.parse(localStorage.getItem("form")));
    step > 0 ? setStep(step - 1) : "";
  };

  const next = () => {
    console.log(save());
    //jeśli pole jest puste nie przenoś dalej
    if (save() == 1) return;
    //przejdź do następnego kroku
    step < formTemplate.length - 1 ? setStep(step + 1) : "";
    //wyślij formularz
    if (step == formTemplate.length - 1) {
      const formData = new FormData();
      formData.append("text", localStorage.getItem("form"));
      for (let index = 0; index < formDataFile.length; index++) {
        formData.append("file" + index, formDataFile[index]);
      }
      fetch("api/mail", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.status == 200) {
          setIsEnd(true);
        }
      });
    }
  };

  return (
    <>
      <Head>
        <title>Soltix - Kontakt</title>
        <meta
          name="description"
          content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!"
        />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Wrapper>
        {!isEnd ? (
          <>
            <ContactTop step={step} steps={formTemplate.length - 1} />
            <ContactForm
              step={step}
              formTemplate={formTemplate}
              formData={formData}
              formDataFile={formDataFile}
              save={save}
            />
            <ContactBottom
              prev={() => prev()}
              next={() => next()}
              step={step}
              steps={formTemplate.length - 1}
            />
          </>
        ) : (
          <ContactEnd />
        )}
        <Accordeon data={contactData} />
      </Wrapper>
      <Footer />
    </>
  );
}
