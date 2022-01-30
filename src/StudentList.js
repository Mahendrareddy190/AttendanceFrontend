import React, { useEffect, useRef } from "react";
import Navbar from "./navbar";
import "./App.css";
import "./studentlist.css";
import wave1 from "./images/wave1.jpg";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState } from "react";
const {
  createStudent,
  getallstudent,
  deleteStudent,
} = require("./cors/studenthelper");

const StudentList = () => {
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    rollno: "",
    section: "",
    error: "",
  });
  const { name, rollno, section, error } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const override = css`
    display: block;
    transform: translate(380%, 100%);
    margin-bottom: 100px;
    border-color: red;
  `;
  let [color, setColor] = useState("#F71071");

  const formRef = useRef(null);

  const onSubmit = async (e) => {
    formRef.current.value = "";
    e.preventDefault();
    setValues({ ...values, error: false });
    var item = JSON.parse(localStorage.getItem("userdata"));
    var userId = item.msg._id;
    await createStudent({ name, rollno, section }, userId).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values });

        preload();
      }
    });
  };

  const preload = async () => {
    var item = JSON.parse(localStorage.getItem("userdata"));
    var userId = item.msg._id;
    var data = await getallstudent(userId);
    if (data && data.error) {
      console.log(data.error);
    } else {
      setStudent(data);
    }
  };

  useEffect(() => {
    preload();
  }, []);

  const dele = (studentId) => {
    var result = window.confirm("Are U Sure u Want To Delete Student..?");
    console.log(result);
    if (result === true) {
      deleteStudent(studentId).then((data) => {
        if (data && data.error) {
          console.log(data.error);
        }
        preload();
      });
    }
  };

  const formData = () => (
    <div className="container-fliud pr-0 pl-0">
      <img className="svg1" src={wave1} alt="wave1" />
      <div className="row mt-5 py-4 content12 ml-0 mr-0">
        <div className="col-lg-6 mt-5 col-sm offset-md-3  ">
          <form>
            <label className="text-light">Name : </label>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={handleChange("name")}
                value={name}
                name="text"
                ref={formRef}
              />
              <label className="text-light">Roll No : </label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange("rollno")}
                value={rollno}
                name="text"
              />
              <label className="text-light">Section : </label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange("section")}
                value={section}
                name="text"
              />
              <button
                type="btn"
                className="btn btn-dark mt-3"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  return (
    <div className="list">
      <Navbar />
      <div className="container-fluid pr-0 pl-0">
        <div className="row ml-0 mr-0">
          <div className=" col-lg-8   col-sm pl-0 pr-0 mt-5 ">{formData()}</div>
        </div>
        <div className="row ml-0 mr-0">
          <div className="col-lg-8   col-sm pl-0 pr-0">
            <div className="search">
              <form className="d-flex">
                <input
                  className="form-control pl-0 pr-0"
                  type="text"
                  placeholder="Search"
                  name="text"
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search"
                />
              </form>
            </div>

            <table
              className="table table-hover table-bordered  mt-5 content2"
              id="emp-table"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Roll No</th>
                  <th scope="col-1">Section</th>
                  <th scope="col-1">Delete</th>
                </tr>
              </thead>
              {loading ? (
                <ScaleLoader color={color} loading={loading} css={override} />
              ) : (
                <tbody>
                  {student
                    .filter((value) => {
                      if (search === "") {
                        return value;
                      } else if (value.rollno.includes(search)) {
                        return value;
                      }
                    })
                    .map((stud, count) => {
                      return (
                        <tr key={stud._id}>
                          <td>{count == 0 ? (count += 1) : (count += 1)}</td>
                          <td style={{ fontSize: "15px" }}>{stud.name}</td>
                          <td>{stud.rollno}</td>
                          <td style={{ fontSize: "15px" }}>{stud.section}</td>
                          <td>
                            {
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => dele(stud._id)}
                              >
                                Delete
                              </button>
                            }
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              )}
            </table>
            <ReactHTMLTableToExcel
              className="btn btn-primary excel"
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

export default StudentList;
