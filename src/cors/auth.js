export const createUser = (user) => {
  return fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const User = (userdata) => {
  return fetch("http://localhost:3000/api/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
    .then((response) => {
      return new Promise((resolve, reject) => {
        resolve(response.json());
      });
    })
    .catch((err) => console.log(err));
};

export const getusers = (usersId) => {
  return fetch(`http://localhost:3000/api/getuser/${usersId}`, {
    method: "GET",
  })
    .then((response) => {
      return new Promise((resolve, reject) => {
        resolve(response.json());
      });
    })
    .catch((err) => console.log(err));
};
