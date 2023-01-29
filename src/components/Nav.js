import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetDailyNewsQuery } from "./api/apiCall";

const Nav = () => {
  const [country, setCountry] = useState("");
  useGetDailyNewsQuery({ country: `${country}` });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCountry({ ...country, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-default fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand " href="#">
          Daily News 24/7
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item active">
                  <Link to="/business" className="nav-link text-dark fw-bold">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/general" className="nav-link text-dark fw-bold">
                    General
                  </Link>
                </li>
                <li>
                  <Link to="/health" className="nav-link text-dark fw-bold">
                    Health
                  </Link>
                </li>
                <li>
                  <Link to="/science" className="nav-link text-dark fw-bold">
                    Science
                  </Link>
                </li>
                <li>
                  <Link to="/sports" className="nav-link text-dark fw-bold">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/entertainment"
                    className="nav-link text-dark fw-bold"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="nav-link text-dark fw-bold">
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              name="country"
              onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

//country:['ae','ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve','za']
