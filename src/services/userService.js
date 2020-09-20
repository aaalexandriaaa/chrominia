import tokenService from "../services/tokenService";
const BASE_URL = "/api/users";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function update(user) {
  return fetch(`${BASE_URL}/${user._id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user._id)
  })
    .then((res) => res.json())
}

export function showProfile(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
}

export default {
  getAllUsers,
  update,
  showProfile
};