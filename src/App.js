import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion/Accordion.js";
import Tab from "./components/Tab/Tab";

function App() {
   return (
      <>
         <Accordion />
         <Tab />
      </>
   );
}

export default App;
