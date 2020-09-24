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

export function getUserProjects(id) {
    return fetch(`${BASE_URL}${id}`, {
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    }, { mode: "cors" })
        .then(res => res.json())
}

export function projectDetails(id) {
    return fetch(`${BASE_URL}project/${id}`)
        .then(res => res.json())
}

export function update(project) {
    return fetch(`${BASE_URL}${project._id}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(project)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function deleteProject(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    }, { mode: "cors" })
        .then(res => res.json());
}

export function attachImage(id, project) {
    return fetch(`${BASE_URL}image/${project}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(id)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function attachSupply(id, project) {
    return fetch(`${BASE_URL}supply/${project}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(id)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function removeSupply(id, project) {
  return fetch(`${BASE_URL}remove/supply/${project}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(id)
  }, { mode: "cors" })
      .then(res => res.json());
}

export function removeImage(id, project) {
  return fetch(`${BASE_URL}remove/image/${project}`, {
      method: "PUT",
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(id)
  }, { mode: "cors" })
      .then(res => res.json());
} 