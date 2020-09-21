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