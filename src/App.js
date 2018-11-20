import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="contact manager" />
        <Contact name="Jhon Doe" phone={546464} />
      </div>
    );
  }
}

export default App;
