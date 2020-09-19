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