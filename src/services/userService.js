import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

// export function update(user) {
//   return fetch(`${BASE_URL}${user._id}`, {
//     method: 'PUT',
//     headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
//     body: JSON.stringify(user)
//   }, { mode: "cors" })
//     .then((res) => res.json())
// }

export function update(user) {
  return fetch(`${BASE_URL}${user._id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    body: JSON.stringify(user)
  }, { mode: "cors" })
  //controller should return a token, remove the existing token and write in the new one
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })  
    .then(({ token }) => {
      tokenService.removeToken()
      tokenService.setToken(token)
    });
}

export function showProfile(id) {
  return fetch(`${BASE_URL}${id}`, {
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() }
  })
    .then((res) => res.json())
}

export default {
  getAllUsers,
  update,
  showProfile
};