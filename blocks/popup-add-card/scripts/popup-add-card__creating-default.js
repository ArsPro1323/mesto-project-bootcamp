const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function draw_cards() {
  const cards = document.querySelector('.elements');

  for (var i = initialCards.length - 1; i >= 0; i--) {
    card = document.createElement('div');
    card.setAttribute('class', 'card');

    image = document.createElement('img');
    image.setAttribute('class', 'card__image');
    image.setAttribute('alt', initialCards[i].name);
    image.setAttribute('src', initialCards[i].link);

    let info = document.createElement('div');
    info.setAttribute('class', 'card__description');

    let name = document.createElement('h2');
    name.setAttribute('class', 'card__name');
    name.textContent = initialCards[i].name;

    let like_button = document.createElement('button');
    like_button.setAttribute('type', 'buton');
    like_button.setAttribute('class', 'card__like-button card__like-button_off');
    like_button.setAttribute('value', 'OFF');

    let delete_button = document.createElement('button');
    delete_button.setAttribute('type', 'buton');
    delete_button.setAttribute('class', 'card__delete-button');
    
    card.append(delete_button);
    info.append(name);
    info.append(like_button);
    card.append(image);
    card.append(info);
    cards.append(card);
  }
}

draw_cards();