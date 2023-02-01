export const createStudent = (student, userId) => {
  return fetch(`http://localhost:3000/api/create/${userId}`, {
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
  return fetch(`http://localhost:3000/api/created/${userId}`, {
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
  return fetch(`http://localhost:3000/api/match/${userId}`, {
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
  return fetch(`http://localhost:3000/api/getall/${userId}`, {
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
  return fetch(`http://localhost:3000/api/getalls/${userId}`, {
    method: "GET",
  }).then((response) => {
    return new Promise((resolve, reject) => {
      resolve(response.json());
    }).catch((err) => console.log(err));
  });
};
export const deleteStudent = (studentId) => {
  return fetch(`http://localhost:3000/api/delete/${studentId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteAttendence = (attendenceId) => {
  return fetch(`http://localhost:3000/api/delete/${attendenceId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// http://localhost:3000/
