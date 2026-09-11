import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Technology from "./components/technology/Technology/Technology";
import type { TechnologyType } from "./types/TechnologyType";
import Footer from "./components/Footer";

function App() {
  //! LOAD DATA FROM API
  const technologyPromise = async (): Promise<TechnologyType[]> => {
    const response = await fetch("../public/data.json");
    return await response.json();
  };
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Suspense>
          <Technology technologyPromise={technologyPromise()} />
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
