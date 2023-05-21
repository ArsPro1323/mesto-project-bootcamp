import { checkResponse } from "./utils";

const config = {
  baseUrl: 'https://nomoreparties.co/v1/exp-mipt-fbc-1',
  headers: {
    authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  }).then(checkResponse);
}

export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  }).then(checkResponse);
}

export const getProfileId = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  }).then(checkResponse);
}

export const updateProfile = (new_name, new_about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: new_name,
      about: new_about
    })
  }).then(checkResponse); 
}

export const changeLogoProfile = (new_link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: new_link
    })
  }).then(checkResponse); 
}

export const pushCard = (new_name, new_link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: new_name,
      link: new_link
    })
  }).then(checkResponse); 
}

export const deleteMyCard = (cardId) => {
  return fetch('https://nomoreparties.co/v1/exp-mipt-fbc-1/cards/' + cardId, {
    method: 'DELETE',
    headers: config.headers,
  }).then(checkResponse); 
}

export const likeCard = (cardId) => {
  return fetch('https://nomoreparties.co/v1/exp-mipt-fbc-1/cards/likes/' + cardId, {
    method: 'PUT',
    headers: config.headers,
  }).then(checkResponse); 
}

export const dislikeCard = (cardId) => {
  return fetch('https://nomoreparties.co/v1/exp-mipt-fbc-1/cards/likes/' + cardId, {
    method: 'DELETE',
    headers: config.headers,
  }).then(checkResponse);
}