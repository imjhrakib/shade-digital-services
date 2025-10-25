import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FeatureSection from "./components/Section/FeaturesSection";

function App() {
  return (
    <>
      <nav>
        <Header></Header>
      </nav>
      <main>
        <FeatureSection></FeatureSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
