import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import News from "../News";

export default class CategoryRoute extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/business" element={<News category="Business" />} />
          <Route
            path="/entertainment"
            element={<News key="business" category="Entertainment" />}
          />
          <Route
            path="/general"
            element={<News key="general" category="General" />}
          />
          <Route
            path="/health"
            element={<News key="health" category="Health" />}
          />
          <Route
            path="/science"
            element={<News key="science" category="Science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" category="Sports" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" category="Technology" />}
          />
        </Routes>
      </div>
    );
  }
}
