import Head from "next/head";
import About from "../components/home/About";
import BuildForYou from "../components/home/BuildForYou";
import Contact from "../components/home/Contact";
import Distinctions from "../components/home/Distinctions";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Team from "../components/home/Team";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soltix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <Distinctions />
      <About />
      <BuildForYou/>
      <Features />
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
}
