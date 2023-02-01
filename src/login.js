import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";
import tilt from "./Assets/tilt.svg";
import bg1 from "./Assets/bg1.svg";
import { User } from "./cors/auth";
import swal from "sweetalert";
// import { css } from "@emotion/react";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    didRedirect: false,
  });
  const { email, password } = values;

  const handleChange = (email) => (event) => {
    setValues({ ...values, error: false, [email]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    if (values.email !== "" && values.password !== "") {
      console.log("value: ", values);
      await User({ email, password }).then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, error: false, didRedirect: true });
          window.localStorage.setItem("userdata", JSON.stringify(data));
        }
        if (!data.error) {
          if (data.msg.email !== data.msg.password) {
            navigate("/");
          }
        } else {
          swal(
            "Check Credentials",
            "plsease, verify your email before login",
            "error"
          );
        }
      });
    } else {
      swal("Data Empty..?", "Enter your Credentials!", "warning");
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fliud mr-0 ml-0 pl-0 pr-0">
      <div className="bg2-back">
        <img className="till" src={tilt} alt="tilt" />
      </div>
      <div className="row  mr-0 ml-0">
        <div className="col-lg-6 bsss  col-md-6 col-sm pl-0 pr-0 ">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            src={bg1}
            alt="bg1"
          />
        </div>

        <div
          className="col-lg-5 col-md-5 col-sm pr-0 pl-0"
          style={{ zIndex: 1 }}
        >
          <div
            className="welcome"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Welcome Back
          </div>

          <div className="log" data-aos="zoom-out" data-aos-duration="2000">
            <div className="white">
              <div className="login">
                <form action="/">
                  <div className="form-group">
                    <div className="input-group">
                      <i className="fa fa-envelope icon"></i>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Username"
                        onChange={handleChange("email")}
                        value={email}
                        required
                        style={{ backgroundColor: "#efefef", height: "42px" }}
                      />
                    </div>
                  </div>
                  <div className="form-group input input-group">
                    <i className="fa fa-key icon"></i>
                    <input
                      type="password"
                      className="form-control text-dark"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={handleChange("password")}
                      value={password}
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
                    signIn
                  </button>
                  <p
                    style={{
                      fontSize: "12px",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <a href="/login" style={{ textDecoration: "none" }}>
                      <b>Forgot password?</b>
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <span> Don't have an account? </span>
                    <a href="/singup" style={{ textDecoration: "none" }}>
                      <b>Sign up here </b>
                    </a>
                  </p>
                </form>
              </div>
            </div>

            <div className="form-wrapper">
              <div
                className="social-list align-center sign-in"
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
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="align-center google-bg"
                >
                  <i
                    data-aos="zoom-in"
                    className="bx bxl-google"
                    data-aos-duration="3000"
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
      </div>
    </div>
  );
};

export default Login;
