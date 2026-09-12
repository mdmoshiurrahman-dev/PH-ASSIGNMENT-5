import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Technology from "./components/technology/Technology/Technology";
import type { TechnologyType } from "./types/TechnologyType";
import Footer from "./components/Footer";
import { Fallback } from "./components/Fallback";
import SideToggle from "./components/SideToggle";

function App() {
  //! LOAD DATA FROM API
  const technologyPromise = async (): Promise<TechnologyType[]> => {
    const response = await fetch("../public/data.json");
    return await response.json();
  };
  const [button, setButton] = useState<boolean>(false);
  const handelButtonState = (): void => {
    setButton(!button);
  };
  return (
    <>
      <header>
        {button ? <SideToggle /> : ""}
        <Nav handelButtonState={handelButtonState} />
        <Hero />
      </header>
      <main>
        <Suspense fallback={<Fallback />}>
          <Technology technologyPromise={technologyPromise()} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
