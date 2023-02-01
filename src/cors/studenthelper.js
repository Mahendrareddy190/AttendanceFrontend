export const createStudent = (student, userId) => {
  return fetch(`https://attendencebackend.onrender.com/api/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(student),
  })
    .then((response) => {
      return new Promise((resolve, reject) => {
        resolve(response.json());
      });
    })

    .catch((err) => console.log(err));
};
export const addAttendence = (Attendence, userId) => {
  return fetch(`https://attendencebackend.onrender.com/api/created/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Attendence),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const matchs = (date, userId) => {
  return fetch(`https://attendencebackend.onrender.com/api/match/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(date),
  })
    .then((response) => {
      // console.log("match",response.json())
      return new Promise((resolve, reject) => {
        resolve(response.json());
      });
    })
    .catch((err) => console.log(err));
};

export const getallstudent = (userId) => {
  return fetch(`https://attendencebackend.onrender.com/api/getall/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return new Promise((resolve, reject) => {
        resolve(response.json());
      });
    })
    .catch((err) => console.log(err));
};

export const AllAttendence = (userId) => {
  return fetch(`https://attendencebackend.onrender.com/api/getalls/${userId}`, {
    method: "GET",
  }).then((response) => {
    return new Promise((resolve, reject) => {
      resolve(response.json());
    }).catch((err) => console.log(err));
  });
};
export const deleteStudent = (studentId) => {
  return fetch(
    `https://attendencebackend.onrender.com/api/delete/${studentId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteAttendence = (attendenceId) => {
  return fetch(
    `https://attendencebackend.onrender.com/api/delete/${attendenceId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// http://localhost:3000/
