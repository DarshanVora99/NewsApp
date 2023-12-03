import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 5 ;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />
            <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
