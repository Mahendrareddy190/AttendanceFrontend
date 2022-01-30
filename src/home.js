import React, { useEffect } from "react";
import Navbar from "./navbar";
import img from "./3.png";
import img2 from "./6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow from "./Assets/arrow-up.svg";
import mobile from "./Assets/mobile.svg";
import "./App.css";
import "./home.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SchoolIcon from "@material-ui/icons/School";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Darkmode from "darkmode-js";
import python from "./images/python.png";
import javascript from "./images/javascript.png";
import java from "./images/java.png";
import learn from "./images/learn.jfif";
import learn1 from "./images/learn1.png";
import learn2 from "./images/learn2.mp4";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const options = {
    bottom: "20px", // default: '32px'
    right: "32px", // default: '32px'
    left: "unset", // default: 'unset'
    time: "0.3s", // default: '0.3s'
    mixColor: "#c33764", // default: '#fff'
    // backgroundColor: " #1d2671", // default: '#fff'
    // buttonColorDark: "#c33764", // default: '#100f2c'
    buttonColorLight: "#c33764", // default: '#fff'
    saveInCookies: true, // default: true,
    label: "🌓", // default: ''
    autoMatchOsTheme: true, // default: true
    postion: "sticky",
  };

  new Darkmode(options).showWidget();
  var item = JSON.parse(localStorage.getItem("userdata"));

  function cl() {
    var jkon = document.getElementById("hom");
    window.addEventListener("mouseover", function () {
      jkon.style.color = "orange";
    });
    window.addEventListener("mouseout", function () {
      jkon.style.color = "#fff";
    });
  }

  return (
    <div className="Student">
      <div className="container-fliud">
        <Navbar />
      </div>
      <div className="container-fliud">
        <img className="speedline" id="speedline" src={img} alt="speed" />
        <div className="row mt-5 ml-0 mr-0">
          <div
            className="col-lg-5 col-md-5 col-sm rowtop"
            onMouseOver={(e) => cl()}
          >
            <div className="content" data-aos="fade-right">
              <h3 id="hom">
                School Keeps You Safe, Educates You, And Prepares You For Your
                Future. Don’t Miss Out!...
              </h3>
            </div>
            {item === null ? (
              <a href="/login" style={{ textDecoration: "none" }}>
                <button
                  className="btn btn-light content-btn CTA "
                  id="student"
                  data-aos="fade-up"
                >
                  Student`s
                  <img
                    className="ml-1"
                    src={arrow}
                    alt="cta"
                    width="50"
                    height="50"
                  />
                </button>
              </a>
            ) : (
              <a href="/student" style={{ textDecoration: "none" }}>
                <button
                  className="btn btn-light content-btn CTA "
                  id="student"
                  data-aos="fade-up"
                >
                  Student`s
                  <img
                    className="ml-1"
                    src={arrow}
                    id="student"
                    alt="cta"
                    width="50"
                    height="50"
                  />
                </button>
              </a>
            )}
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm rowtop move "
            data-aos="fade-left"
          >
            <img
              className="img-right"
              src={mobile}
              alt="globe"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </div>
      <div className="container-fliud">
        <div className="row ml-0 mr-0">
          <div className="col-lg-5 col-md-5 col-sm-12 aboutteacher">
            <div className="subtitle" data-aos="fade-left">
              Warm welcome!
            </div>
            <h2 className="title" data-aos="fade-up">
              About Teacher
            </h2>
            <div className="content1" data-aos="fade-right">
              <p>
                A teacher is a person who helps people to learn. A teacher often
                works in a classroom. There are many different kinds of
                teachers. Some teachers teach young children in kindergarten or
                primary schools.
              </p>
              <p className="p2">
                Teacher is a person who plays multiple roles in their career.
                They become mother when we are sick. They become father when we
                commit mistake. They throughout remain our friend.
              </p>
            </div>
          </div>
          <div className="col-5" data-aos="fade-left">
            <img className="img-right1" src={img2} alt="mobile" />
          </div>
        </div>
      </div>
      <div className=" containe" style={{ width: "100%", height: "100%" }}>
        <div className="row ml-0 mr-0  backsgrounds ">
          <div className="backsgrounds1">
            <p className="carreer">Your Career Path Begins Here</p>
            <div className="carrer_options">
              <div
                className="col-lg-2 col-md-1  col-sm car_item pr-0 pl-0"
                data-aos="flip-up"
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <SchoolIcon style={{ fontSize: 70 }} color="primary" />
                    </h5>
                    <h6 className="card-subtitle mb-2  text-dark">
                      School Programs
                    </h6>
                    <p
                      className="card-text mt-4"
                      style={{ fontFamily: "Roboto" }}
                    >
                      <p>
                        School-to-work transition is a phrase referring to
                        on-the-job training, education agreements or other
                        programs designed to prepare students to enter the job
                        market.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-1 col-sm car_item pr-0 pl-0 "
                data-aos="zoom-in-down"
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title ">
                      <MonetizationOnIcon
                        style={{ fontSize: 70 }}
                        color="primary"
                      />
                    </h5>
                    <h6 className="card-subtitle mb-2  text-dark">
                      Affordability
                    </h6>
                    <p
                      className="card-text mt-2"
                      style={{ fontFamily: "Roboto" }}
                    >
                      <p>
                        1) This type of perfume store provides more reasonably
                        priced scents, focusing on affordability....
                      </p>
                      <p>
                        2)They are popular because of their affordability and
                        ease of installation....
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-1 col-sm car_item pr-0 pl-0 "
                data-aos="flip-right"
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title ">
                      <TrendingUpIcon
                        style={{ fontSize: 70 }}
                        color="primary"
                      />
                    </h5>
                    <h6 className="card-subtitle mb-2  text-dark">
                      Track Record
                    </h6>
                    <p
                      className="card-text mt-4"
                      style={{ fontFamily: "Roboto" }}
                    >
                      <p>
                        If you talk about the track record of a person, company,
                        or product, you are referring to their past performance,
                        achievements, or failures in it.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <br /> */}
      <div className=" containe " style={{ width: "100%", height: "100%" }}>
        <div className="row ml-0 mr-0  backsgrounds12 ">
          <div className="backsgrounds123">
            <p className="carreer text-light">
              What do you want to learn today...?
            </p>
            <div className="carrer_options">
              <div
                className="col-lg-2 col-md-1  col-sm car_item pr-0 pl-0"
                data-aos="fade-left"
              >
                <div className="card ">
                  <h5 className="card-title " style={{ marginTop: "20px" }}>
                    <img
                      src={python}
                      class="card-img-top"
                      alt="python"
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </h5>
                  <div className="card-body">
                    <h6 className="card-subtitles mb-2  text-dark">
                      <p> Learn Python-interactive Python</p>
                    </h6>
                    <p className="card-text " style={{ fontFamily: "Roboto" }}>
                      <p>
                        -- Python is a general-purpose interpreted, interactive,
                        object-oriented, and high-level programming language.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-1 col-sm car_item pr-0 pl-0 "
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="card">
                  <h5 className="card-title " style={{ marginTop: "20px" }}>
                    <img
                      src={javascript}
                      class="card-img-top"
                      alt="javascript"
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </h5>
                  <div className="card-body">
                    <h6 className="card-subtitles1 mb-2  text-dark" style={{}}>
                      Javascript
                    </h6>
                    <p className="card-text " style={{ fontFamily: "Roboto" }}>
                      <p>
                        -- JavaScript is a text-based programming language used
                        both on the client-side and server-side that allows you
                        to make web pages interactive
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2 col-md-1 col-sm car_item pr-0 pl-0 "
                data-aos="fade-right"
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title ">
                      <img
                        src={java}
                        class="card-img-top"
                        alt="java"
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </h5>
                    <h6 className="card-subtitless mb-2  text-dark" style={{}}>
                      Java
                    </h6>
                    <p
                      className="card-text mt-4"
                      style={{ fontFamily: "Roboto" }}
                    >
                      <p>
                        -- Java is also commonly used for desktop computing,
                        other mobile computing, games, and numerical computing.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backsg">
            <div className="bgffk">
              <div className="bgffk123">
                <div className="col-lg-4 col-md-1 col-sm   pr-0 pl-0 text-light ">
                  <h3 className="matter mt-5" data-aos="flip-right">
                    Where Learing Begin...?
                  </h3>
                  <div
                    className="submatter "
                    style={{ fontFamily: "Roboto" }}
                    data-aos="flip-left"
                  >
                    <p className="mr-0 ml-0">
                      Buding a strong sense of commitment involves dedicating
                      yourself to something, like a person or a cause.
                    </p>
                    <h4
                      className="mr-0 ml-0"
                      style={{ fontSize: "30px", fontFamily: "Roboto" }}
                    >
                      Commitment grows when people:
                    </h4>
                    <p className="mr-0 ml-0">1.Work together.</p>
                    <p className="mr-0 ml-0">
                      2.Feel successful at what they do.
                    </p>
                    <p className="mr-0 ml-0">3.Make decisions together.</p>
                    <p className="mr-0 ml-0">
                      4.Hold each other to high principles.
                    </p>
                    <p className="mr-0 ml-0">
                      5.Support one another's leadership.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-1 col-sm   pr-0 pl-0">
                  <div className="maindiv">
                    <div
                      className="img1s mt-3"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <img src={learn} alt="img" width="400px" height="200px" />
                    </div>
                    <div className="img12" data-aos="zoom-out-down">
                      <video width="400px" height="200px" controls>
                        <source src={learn2} type="video/mp4" />
                      </video>
                    </div>
                    <div className="img1234 mb-5 " data-aos="fade-down-left">
                      <img
                        src={learn1}
                        alt="img"
                        width="400px"
                        height="200px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
