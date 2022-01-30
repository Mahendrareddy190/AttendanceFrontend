import React, { useEffect, useState } from "react";
import "./singup.css";
import tilt from "./Assets/tilt.svg";
import bg1 from "./Assets/bg2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { createUser } from "./cors/auth";
import swal from "sweetalert";
const Singup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    error: "",
  });

  const { name, email, password, conformPassword, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (values.conformPassword === values.password) {
      if (values.password != "") {
        console.log(values);
        setValues({ ...values, error: false });
        createUser({ email, password }).then((data) => {
          if (data && data.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({ ...values });
            swal("User Created Successfully", "please verify your email before login", "success");
          }
        });
      } else {
        swal("Data Empty..?", "Enter your Credentials!", "warning");
      }
    } else {
      swal(
        "We are very sorry!",
        "Both Password`s dosen`t match",
        "error"
      );
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-fliud pl-0 pr-0">
      <div className="backgro">
        <img className="backm" src={tilt} alt="tilt" />
      </div>
      <div className="row ml-0 mr-0">
        <div className="col-lg-5 col-md-5 col-sm pl-0 pr-0">
          <div className="well" data-aos="fade-down" data-aos-duration="2000">
            Join With Us
          </div>
          <div className="blur" data-aos="fade-right" data-aos-duration="2000">
            <div className="panel">
              <div className="from-wra">
                <form action="/">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fa fa-user icon"></i>
                      <input
                        type="name"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        placeholder="Username"
                        onChange={handleChange("name")}
                        value={name}
                        style={{ backgroundColor: "#efefef", height: "42px" }}
                      />
                    </div>
                  </div>
                  <div className="form-group input input-group">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      type="email"
                      className="form-control text-dark"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      required
                      onChange={handleChange("email")}
                      value={email}
                      style={{ backgroundColor: "#efefef", height: "42px" }}
                    />
                  </div>
                  <div className="form-group input input-group">
                    <i className="fa fa-key icon"></i>
                    <input
                      type="password"
                      className="form-control text-dark"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                      style={{ backgroundColor: "#efefef", height: "42px" }}
                      onChange={handleChange("password")}
                      value={password}
                    />
                  </div>
                  <div className="form-group input input-group">
                    <i className="fa fa-key icon"></i>
                    <input
                      type="password"
                      className="form-control text-dark"
                      id="exampleInputPassword1"
                      placeholder="conform Password"
                      onChange={handleChange("conformPassword")}
                      value={conformPassword}
                      required
                      style={{ backgroundColor: "#efefef", height: "42px" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      height: "45px",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                    onClick={onSubmit}
                  >
                    Sing Up
                  </button>
                  <p
                    className="font-bb"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",

                      justifyContent: "center",
                      marginTop: "30px",
                      cursor: "pointer",
                    }}
                  >
                    <span> Do have an account? </span>
                    <a href="/login" style={{ textDecoration: "none" }}>
                      <b>Sign in here </b>
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="form">
              <div
                className="social-list align-center"
                style={{
                  display: "flex",
                  backgroundColor: "#ffffff",
                  width: "100%",
                  height: "70px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="align-center facebook-bg"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="bx bxl-facebook"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <div
                  className="align-center google-bg"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="bx bxl-google"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <div
                  className="align-center twitter-bg"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="bx bxl-twitter"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <div
                  className="align-center insta-bg"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="bx bxl-instagram-alt"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5  col-sm  pr-0 pl-0">
          <div className="bg1-down" data-aos="zoom-in" data-aos-duration="2000">
            <img src={bg1} alt="bg1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
