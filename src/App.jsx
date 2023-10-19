import React from "react";
import Navbar from "./components/Navbar";
import { About, Contact, Experience, Project } from "./container";
import { Footer } from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
