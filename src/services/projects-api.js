import tokenService from "./tokenService";
const BASE_URL = "/api/projects/";

export function create(project) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(project)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, { mode: "cors" })
        .then(res => res.json())
}

export function getUserProjects() {
    return fetch(BASE_URL, {
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    }, { mode: "cors" })
        .then(res => res.json())
}

export function projectDetails(id) {
    return fetch(`${BASE_URL}/${id}`)
        .then(res => res.json())
}