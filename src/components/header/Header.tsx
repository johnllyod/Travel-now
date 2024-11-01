import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Outlet } from "react-router-dom";

library.add(faSun, faMoon);

const Header = () => {
  let [light, setLight] = useState(true);

  const handleClick = () => {
    const themeElement = document.getElementById("app");
    setLight(!light);
    themeElement?.setAttribute("data-theme", light ? "dark" : "light");
  };

  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className="position-fixed z-3 w-100"
      >
        <Container>
          <Link className="navbar-brand" to={"/Travel-now/"}>
            <img
              src="/Travel-now/images/favicon.ico"
              style={{ maxWidth: "32px", translate: "0 -15%" }}
            />
            ravel now
          </Link>
          <FontAwesomeIcon
            icon={light ? faSun : faMoon}
            className="text-light me-5"
            onClick={handleClick}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/Travel-now/"} className="me-3">
                Home
              </Link>
              <Link to={"/Travel-now/About"}>About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
