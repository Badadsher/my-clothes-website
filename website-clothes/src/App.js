import {
  Header,
  Main,
  Navbar,
  Top,
  Sellary,
  Contacts,
} from "./components/index";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_background">
        <Contacts></Contacts>
        <Top></Top>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Sellary></Sellary>
      <Main></Main>
    </div>
  );
};

export default App;
