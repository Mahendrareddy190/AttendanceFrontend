import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./App.css";
import "./takeAttend.css";
import image from "./mahi1.jpg";
import swal from "sweetalert";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const { addAttendence, getallstudent } = require("./cors/studenthelper");

const Mahi = () => {
  const [cart, setCart] = useState([]);
  const [student, setstudent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const override = css`
    display: block;
    transform: translate(300%, 100%);
    margin-bottom: 100px;
    border-color: red;
  `;
  let [color, setColor] = useState("#F71071");

  const onSubmit = (event) => {
    event.preventDefault();
    if (cart != "") {
      let item = JSON.parse(localStorage.getItem("userdata"));
      let userId = item.msg._id;
      addAttendence(cart, userId).then((data) => {
        if (data && data.message) {
          console.log(data.message);
          swal("👍👍", "Successfully Submitted the Data!", "success");
        }
      });
    } else {
      swal(" Data Empty..?", "failed to Submit the Data!", "warning");
    }
  };

  const handleremove = (id) => {
    const newCart = cart.filter((item) => item.list._id !== id);
    setCart(newCart);
  };

  const addtocart = (studen) => {
    setCart([...cart, { list: studen, status: true }]);
  };

  const addto = (studen) => {
    setCart([...cart, { list: studen, status: false }]);
  };

  const preload = async () => {
    let item = JSON.parse(localStorage.getItem("userdata"));
    let userId = item.msg._id;
    var data = await getallstudent(userId);
    if (data && data.error) {
      console.error(data.error);
    } else {
      setstudent(data);
    }
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="container-fliud  ">
      <div className="container-fliud ">
        <Navbar />
      </div>
      <div className="container-fliud">
        <img className="img2" src={image} alt="mahi" />

        <div className="row ml-0 mr-0">
          <div className="col-lg-3 col-md-3 col-sm pl-0 pr-0">
            <hr />
            <h3 className="h3">Students Of CC06 </h3>
            <table className="table table-hover table-bordered small">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Present</th>
                  <th scope="col">Absent</th>
                </tr>
              </thead>
              {loading ? (
                <ScaleLoader color={color} loading={loading} css={override} />
              ) : (
                <tbody>
                  {student.map((stud, count) => (
                    <tr key={stud._id}>
                      <td>{count == 0 ? (count += 1) : (count += 1)}</td>
                      <td className="font mt-2" style={{ fontSize: "15px" }}>
                        {stud.name}
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => addtocart(stud)}
                        >
                          present
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => addto(stud)}
                        >
                          Absent
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          <div className="col-lg-4 col-sm-10 smallS pl-0 pr-0 ">
            <hr />
            <h2 className="absent">Present Status</h2>
            <table className="table table-hover table-bordered ml-2">
              <thead>
                <tr>
                  <th scope="col">Present</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((stud) => {
                  if (stud.status === true) {
                    return (
                      <tr key={stud._id}>
                        <td className="font" style={{ fontSize: "15px" }}>
                          {stud.list.name}
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleremove(stud.list._id)}
                          >
                            Remove present
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 col-sm-10 smallS pl-0 pr-0">
            <hr />
            <h2 className="absent ">Absent students</h2>
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Absent</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((stud) => {
                  if (stud.status === false) {
                    return (
                      <tr key={stud._id}>
                        <td style={{ fontSize: "15px" }}>{stud.list.name}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleremove(stud.list._id)}
                          >
                            Remove present
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <button className="btn  btn-outline-success top" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mahi;
