import tokenService from "./tokenService";
const BASE_URL = "/api/images/";

export function create(image) {
  return fetch(BASE_URL, {
      method: "POST",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(image)
  }, { mode: "cors" })
      .then(res => res.json());
}

export function getForUser() {
  return fetch(BASE_URL, {
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function getImage(id){
  return fetch(`${BASE_URL}/${id}`)
  .then(res => res.json())
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
  }, {mode: "cors"})
  .then(res => res.json());
}

export function update(image) {
  return fetch(`${BASE_URL}${image._id}`, {
      method: "PUT",
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(image)
  }, {mode: "cors"})
  .then(res => res.json());
}