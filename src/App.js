import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Present from "./Present";
import Student from "./StudentList";
import Absent from "./Absent";
import Singup from "./singup";
import Login from "./login";
import Home from "./home";
import Attendence from "./takeAttend";
import Total from "./total";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
// import Preloder from "./preloder";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    item === null ? setLoading(true) : setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const override = css`
    display: block;
    margin: 350px 0 0 670px;
    border-color: red;
    @media screen and (max-width: 600px) {
      margin: 383px 0 0 110px;
    }
  `;
  let [color] = useState("#F71071");

  var item = JSON.parse(localStorage.getItem("userdata"));
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            loading ? (
              <RiseLoader
                color={color}
                loading={loading}
                css={override}
                s
                size={30}
              />
            ) : (
              // <Preloder />
              <Home />
            )
          }
        />
        <Route
          path={item === null ? "/login" : "/"}
          element={item === null ? <Login /> : <Home />}
        />
        <Route path="/present" element={<Present />} />
        <Route path="/absent" element={<Absent />} />
        <Route path="/student" element={<Student />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/takeattendes" element={<Attendence />} />
        <Route path="/total" element={<Total />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
