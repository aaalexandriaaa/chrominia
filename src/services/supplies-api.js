import tokenService from "./tokenService";
const BASE_URL = "/api/supplies/";

export function create(supply) {
  return fetch(BASE_URL, {
      method: "POST",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(supply)
  }, { mode: "cors" })
      .then(res => res.json());
}

export function wishlist(wishlist) {
  return fetch(`${BASE_URL}wishlist/`, {
      method: "POST",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(wishlist)
  }, { mode: "cors" })
      .then(res => res.json());
}

export function getForUser() {
  return fetch(BASE_URL, {
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function wishList(supply) {
  return fetch(`${BASE_URL}wishlist/${supply._id}`, {
    method: "PUT",
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(supply)
}, {mode: "cors"})
.then(res => res.json());
}

export function deleteOne(supply) {
  return fetch(`${BASE_URL}${supply._id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
  }, {mode: "cors"})
  .then(res => res.json());
}