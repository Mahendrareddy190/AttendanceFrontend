import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./App.css";
import swal from "sweetalert";
import "./present.css";

const { matchs } = require("./cors/studenthelper");

const Present = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState({
    date: "",
    error: "",
  });

  const { date, error } = value;

  const onHandleChange = (name) => (event) => {
    setValue({ ...value, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue({ ...value, error: false });
    let items = JSON.parse(localStorage.getItem("userdata"));
    let userId = items.msg._id;
    matchs({ value }, userId).then((data) => {
      if (data.result != null) {
        if (data && data.error) {
          console.log(data.error);
        } else {
          setCart(data.result.names);
          swal("Good job!", "Your Data Fetched!", "success");
        }
      } else {
        swal("Enter valid Date..?", "We can`t fetch your data!", "error");
      }
    });
  };

  // jsx
  const form = () => {
    return (
      <div className="container">
        <div className="row ml-0 mr-0">
          <div className="col-8 mt-5 form-group">
            <label className="mt-5"> Enter Date :</label>
            <input
              type="date"
              name="number"
              value={date}
              onChange={onHandleChange("date")}
              className="form-control"
              placeholder="Enter the date to fech list of students"
            />
            <button
              className="btn btn-outline-danger mt-4 presentbtn"
              onClick={onSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="present">
      <div className="container-fliud">
        <Navbar />
      </div>
      <div>{form()}</div>
      <div className="container">
        <div className="row mr-0 ml-0">
          <div className="col">
            <form className="d-flex">
              <input
                style={{
                  backgroundColor: "#efefef",
                  height: "48px",
                  marginBottom: "10px",
                }}
                className="form-control"
                type="text"
                placeholder="Search"
                name="text"
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search"
              />
            </form>
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {cart
                  .filter((value) => {
                    if (search == "") {
                      return value;
                    } else if (
                      value.list.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((stud, count) => {
                    if (stud.status === true) {
                      return (
                        <tr className="countf">
                          <td>{stud.list.name}</td>
                          <td>
                            {stud.status === true ? "present" : " Absent"}
                          </td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <Fotter /> */}
    </div>
  );
};

export default Present;
