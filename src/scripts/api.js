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
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const getProfileId = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const updateProfile = (new_name, new_about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: new_name,
      about: new_about
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }); 
}

export const changeLogoProfile = (new_link) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: new_link
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }); 
}

export const pushCard = (new_name, new_link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: {
      authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: new_name,
      link: new_link
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }); 
}

export const deleteMyCard = (cardId) => {
  return fetch('https://nomoreparties.co/v1/exp-mipt-fbc-1/cards/' + cardId, {
    method: 'DELETE',
    headers: {
      authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
      'Content-Type': 'application/json'
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }); 
}

export const likeCard = (cardId) => {
  return fetch('https://nomoreparties.co/v1/exp-mipt-fbc-1/cards/likes/' + cardId, {
    method: 'PUT',
    headers: {
      authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
      'Content-Type': 'application/json'
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }); 
}

export const dislikeCard = (cardId) => {
  return fetch('https://nomoreparties.co/v1/exp-mipt-fbc-1/cards/likes/' + cardId, {
    method: 'DELETE',
    headers: {
      authorization: 'ef6c3b3d-d5f0-409c-a46a-757be69258e6',
      'Content-Type': 'application/json'
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }); 
}