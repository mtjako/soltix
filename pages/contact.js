import Head from "next/head";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import Wrapper from "../components/layout/Wrapper";
import ContactTop from "../components/contact/ContactTop";
import ContactBottom from "../components/contact/ContactBottom";
import ContactForm from "../components/contact/ContactForm";
import { useState,useEffect } from "react";
import FormData from "form-data";
import ContactEnd from "../components/contact/ContactEnd";


export default function Contact() {
  const formTemplate = [
    {
      type: "welcome",
      title: "Dzień dobry 👋",
      data: [
        "Opowiedz nam trochę o sobie i czego potrzebujesz. Wypełnij formularz, abyśmy wiedzieli, w jakim obszarze działasz i czego sobie życzysz. Dzięki temu szybciej dowiemy się, jak możemy Ci pomóc. Wypełnienie formularza nie zajmie Ci więcej niż 3 minuty.",
      ],
    },
    {
      type: "checkbox",
      title: "W jakim obszarze działa Twoja firma?",
      data: ["Produkcja", "Handel", "Usługi"],
    },
    {
      type: "checkbox",
      title:
        "Dla jakiego rodzaju klientów przeznaczone są produkty i/lub usługi Twojej firmy?",
      data: [
        "Dla klientów indywidualnych (B2C)",
        "Dla klientów biznesowych (B2B)",
        "Dla klientów instytucjonalnych (samorządy, jednostki państwowe itp.)",
      ],
    },
    {
      type: "checkbox",
      title: "W jakiej formie chciałbyś mieć nowe oprogramowanie?",
      data: [
        "Responsywna strona internetowa",
        "Aplikacja internetowa",
        "Sklep on-line",
        "Aplikacja mobilna na urządzenia z systemem iOS i Android",
      ],
    },
    {
      type: "checkbox",
      title: "Jaki jest ogólny cel nowego oprogramowania?",
      data: [
        "Zwiększenie produktywności",
        "Obniżenie kosztów",
        "Oszczędzanie czasu",
        "Kontrola i uporządkowanie procesów",
        "Gromadzenie i właściwe przetwarzanie danych",
      ],
    },
    {
      type: "textarea",
      title:
        "Opisz w kilku zdaniach jaki jest cel tworzenia nowego oprogramowania",
      data: ["describe"],
    },
    {
      type: "textarea",
      title:
        "Opowiedz nam w kilku słowach, w jakiej branży działa Twoja firma i czym się ogólnie zajmuje?",
      data: ["describe"],
    },
    {
      type: "radio",
      title: "Ile osób jest zatrudnionych w Twojej firmie lub organizacji?",
      data: ["1-9", "10-19", "20-49", "Ponad 50"],
    },
    {
      type: "radio",
      title:
        "Jaki budżet wstępnie przewidujesz/możesz przeznaczyć na nowe oprogramowanie?",
      data: [
        "do 25 tys. zł",
        "25 - 50 tys. zł",
        "50 - 100 tys. zł",
        "pow. 100 tys. zł",
        "nie chcę w tym momencie udzielić tej informacji",
      ],
    },
    {
      type: "textareaFile",
      title:
        "Będziemy wdzięczni, jeśli zechcesz dodać komentarz (i plik), który Twoim zdaniem może nam się przydać dla dodatkowych informacji",
      data: ["describe", "file"],
    },
    {
      type: "input",
      title: "Zostaw nam swoje dane kontaktowe",
      data: [
        { type: "text", name: "Imię", required: true },
        { type: "text", name: "Nazwisko", required: true },
        { type: "text", name: "Nazwa firmy", required: false },
        { type: "text", name: "Stanowisko", required: false },
        { type: "email", name: "E-mail", required: true },
        { type: "text", name: "Numer telefonu", required: true },
        {
          type: "checkbox",
          name: "Czy chcesz podpisać z nami umowę o zachowaniu poufności (NDA) przed przekazaniem nam dalszych informacji?",
          required: false,
        },
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
  const save = ()=>{
    const form = document.querySelector("form");
    //WELCOME
    if (formTemplate[step].type === "welcome") {
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = ['welcome'];
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
      const formData = form.querySelectorAll("textarea,input[type=file]");
      // if (formData[0].value.length === 0) return 1;
      const arr = [formData[0].value];
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = arr;
      if(formData[1].files.length != 0){
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
      const formData = form.querySelectorAll("input[type=text],input[type=email],input[type=checkbox]");
      const arr = [];
      let isEmpty = 0;
      formData.forEach((item) => {
        if(item.type == "checkbox") {
          arr.push(item.checked);
        }else if(item.type == "email"){
          if (item.value.length === 0) isEmpty == 0 ? isEmpty = 1 : '';
          if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(item.value)){
            isEmpty == 0 ? isEmpty = 1 : '';
          }else{
            arr.push(item.value);
          }
        }else{
          if (item.value.length === 0) isEmpty == 0 ? isEmpty = 1 : '';
          arr.push(item.value);
        }
      });
      if(isEmpty == 1) return 1;
      const element = JSON.parse(localStorage.getItem("form"));
      element[step] = arr;
      localStorage.setItem("form", JSON.stringify(element));
    }
  }

  const prev = () => {
    save();
    setFormData(JSON.parse(localStorage.getItem("form")));
    step > 0 ? setStep(step - 1) : "";
  };

  const next = () => {
    console.log(save());
    //jeśli pole jest puste nie przenoś dalej
    if(save() == 1) return;
    //przejdź do następnego kroku
    step < formTemplate.length - 1 ? setStep(step + 1) : "";
    //wyślij formularz
    if(step == formTemplate.length - 1){
      const formData  = new FormData();
      formData.append('text', localStorage.getItem("form"));
      for (let index = 0; index < formDataFile.length; index++) {
        formData.append('file'+index, formDataFile[index]);
      }
      fetch('api/mail',{
        method:'POST',
        body: formData
      })
      .then(res=> {
        if(res.status == 200){
          setIsEnd(true);
        }
      })
    }
  };

  return (
    <>
      <Head>
        <title>Soltix - Kontakt</title>
        <meta name="description" content="Software House SOLTIX | Tworzymy Dedykowane Oprogramowanie na Zamówienie. Systemy ERP, CRM, DMS, E-commerce | Poproś o darmową wycenę!" />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Wrapper>
        {!isEnd ? (
        <>
          <ContactTop step={step} steps={formTemplate.length - 1} />
          <ContactForm step={step} formTemplate={formTemplate} formData={formData} formDataFile={formDataFile} save={save}/>
          <ContactBottom
            prev={() => prev()}
            next={() => next()}
            step={step}
            steps={formTemplate.length - 1}
          />
        </>
        ):(
          <ContactEnd/>
        )}
      </Wrapper>
      <Footer />
    </>
  );
}
