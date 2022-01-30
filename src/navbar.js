import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./1.png";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";

const Navbar = () => {
  const onsubmit = () => {
    localStorage.removeItem("userdata");
  };

  var item = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    AOS.init();
  }, []);

  

  return (
    <nav className="navbar navbar-expand-md navbar-light nb">
      <div className="container-fluid">
        <a
          className="navbar-brand text-white"
          data-aos="fade-down"
          data-aos-duration="2000"
          href="/"
        >
          <img className="img1" src={image} alt="mahi" />
        </a>
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
          <hr />

          <ul className="navbar-nav me-auto mb-2 mobileS">
            {item == null ? (
              ""
            ) : (
              <li
                className="nav-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a
                  className="nav-link active mt-3 ml-2 mr-1 text-white boder"
                  id="home"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
            )}

            {item == null ? (
              ""
            ) : (
              <li>
                <a
                  className="nav-link text-white ml-2 mr-1 mt-3 boder"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  href="/student"
                >
                  class List
                </a>
              </li>
            )}

            {item == null ? (
              " "
            ) : (
              <li>
                <a
                  className="nav-link text-white ml-2 mr-1 mt-3  boder"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  href="/total"
                >
                  Precentage
                </a>
              </li>
            )}

            {item == null ? (
              " "
            ) : (
              <button
                className="btn btn-secondary dropdown-toggle  ml-2 mr-1 mt-3 btn-sm option"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                options of Attandence
              </button>
            )}

            <ul
              className="dropdown-menu dropdown-menu-dark option optio movedrop "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a className="dropdown-item" href="/takeattendes">
                  TakeAttendance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/present">
                  {item == null ? "  " : "Present Student Day By Day"}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/absent">
                  Absent Student Day By Day
                </a>
              </li>
            </ul>

            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <a
                className="nav-link mt-3 active text-white sing boder "
                aria-current="page"
                href="/login"
                onClick={onsubmit}
                // onClick={alert()}
              >
                {item == null ? "signIn" : "sign Out"}
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <a
                className="nav-link mt-3 active text-white   "
                aria-current="page"
                href="/singup"
              >
                {item != null ? " " : "sign up"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
