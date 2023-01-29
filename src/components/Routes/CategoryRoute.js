import React from "react";
import { Route, Routes } from "react-router-dom";
import News from "../News";

const CategoryRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/business" element={<News category="Business" />} />
        <Route
          path="/entertainment"
          element={<News key="business" category="business" />}
        />
        <Route
          path="/general"
          element={<News key="general" category="general" />}
        />
        <Route
          path="/health"
          element={<News key="health" category="health" />}
        />
        <Route
          path="/science"
          element={<News key="science" category="science" />}
        />
        <Route
          path="/sports"
          element={<News key="sports" category="sports" />}
        />
        <Route
          path="/technology"
          element={<News key="technology" category="technology" />}
        />
      </Routes>
    </div>
  );
};

export default CategoryRoute;
