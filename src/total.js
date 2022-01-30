import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./total.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const { getallstudent, AllAttendence } = require("./cors/studenthelper");

const Total = () => {
  const [cart, setcart] = useState([]);
  const [cart1, setcart1] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const override = css`
    display: block;
    transform: translate(600%, 1130%);
    margin-bottom: 100px;
    border-color: red;

    @media screen and (max-width: 768px) {
      transform: translate(170%, 1120%);
    }
  `;
  let [color, setColor] = useState("#F71071");

  const preload = async () => {
    let items = JSON.parse(localStorage.getItem("userdata"));
    let userId = items.msg._id;
    var data = await getallstudent(userId);
    if (data && data.error) {
      console.log(data.error);
    } else {
      setcart(data);
      // console.log(data);
    }
  };

  const preload1 = async () => {
    let items = JSON.parse(localStorage.getItem("userdata"));
    let userId = items.msg._id;
    var data = await AllAttendence(userId);
    if (data && data.error) {
      console.log(data.error);
    } else {
      setcart1(data);
    }
  };

  useEffect(() => {
    preload();
    preload1();
  }, []);

  const counter = (count) => {
    for (var index = 0; index < cart1.length; index++) {
      return (count = cart1.length);
    }
  };

  const counter1 = (value) => {
    var countpresent = 0;
    for (let j of cart1) {
      // var countpresent = 0;
      for (let k of j.names) {
        if (k.status === true && value === k.list.rollno) {
          countpresent++;
        }
      }
    }

    return countpresent;
  };

  const counter2 = (value) => {
    var countabsent = 0;
    for (let p of cart1) {
      // var countabsent = 0;
      for (let l of p.names) {
        if (l.status === false && value === l.list.rollno) {
          countabsent++;
        }
      }
    }
    return countabsent;
  };

  const total = (id) => {
    return (counter1(id) / counter()) * 100;
  };

  return (
    <div className="conta">
      <Navbar />
      <div className="container-fliud pl-0 pr-0">
        <div className="row mt-5 ml-0 mr-0">
          <div className="col-12 mt-5 col-sm pl-0 pr-0  ">
            <form className="d-flex">
              <input
                style={{
                  backgroundColor: "#efefef",
                  height: "48px",
                  marginTop: "0px",
                  width: "90%",
                  marginLeft: "60px",
                }}
                className="form-control search pl-0 pr-0"
                type="text"
                placeholder="Search"
                name="text"
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search"
              />
            </form>
            <table
              className="table table-hover table-bordered smallmk pl-0 pr-0 "
              id="emp-table"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col-1">Total peroid</th>
                  <th scope="col-1">Present days</th>
                  <th scope="col-1">Absent days </th>
                  <th scope="col-1">Total %</th>
                </tr>
              </thead>

              {loading ? (
                <BarLoader color={color} loading={loading} css={override} />
              ) : (
                <tbody>
                  {cart
                    .filter((value) => {
                      if (search == "") {
                        return value;
                      } else if (
                        value.name.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((stud1, count) => (
                      <tr key={stud1._id}>
                        <td>{count == 0 ? (count += 1) : (count += 1)}</td>
                        <td style={{ fontSize: "15px" }}>{stud1.name}</td>
                        <td>{counter()}</td>
                        <td>{counter1(stud1.rollno)}</td>
                        <td>{counter2(stud1.rollno)}</td>
                        <td>{total(stud1.rollno)} </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </table>
            <ReactHTMLTableToExcel
              className="btn btn-primary d-flex Excels"
              table="emp-table"
              filename="ClassList"
              sheet="Sheet"
              buttonText="Download"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
