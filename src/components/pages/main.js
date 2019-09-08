import React, { Component } from "react";
// components
import Header from "../Header";
import Tabs from "../TabComponent";
import Footer from "../Footer";

//
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tabs />
        <Footer />
      </div>
    );
  }
}
