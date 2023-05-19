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

import { closePopup } from './modal.js';

const cardTemplate = document.querySelector('#card').content;
const popup_card_image = document.querySelector('.popup-card__image');
const popup_card_description = document.querySelector('.popup-card__description');

import { popup_add_nameInput } from '../index.js';
import { popup_add_jobInput } from '../index.js';
import { cardPopup } from '../index.js';
import { cards } from '../index.js';
import { openPopup } from './modal.js';
import { imagePopup } from '../index.js';

function drawCard(link, card_name) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  
  const card__image = card.querySelector('.card__image');
  card__image.src = link;
  card__image.alt = card_name;
  card__image.addEventListener('click', openPopupCard);

  card.querySelector('.card__name').textContent = card_name;

  card.querySelector('.card__like-button').addEventListener('click', switchLike);

  card.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  
  return card;
}

function switchLike(evt) {
  evt.preventDefault();
  evt.currentTarget.classList.toggle("card__like-button_on");
}

function openPopupCard(evt) {
  evt.preventDefault();
  const item = evt.currentTarget.closest('.card');
  popup_card_image.src = item.querySelector('.card__image').src;
  popup_card_description.textContent = item.querySelector('.card__description').textContent;
  openPopup(imagePopup);
}

function drawDefaultCards() {
  for (let i = 0; i < initialCards.length; i++) {
    cards.prepend(drawCard(initialCards[i].link, initialCards[i].name));
  }
}

function deleteCard(evt) {
  const cardToDelete = evt.currentTarget.closest('.card');
  cardToDelete.remove();
}

export { drawDefaultCards };
export { deleteCard };
export { switchLike };
export { drawCard };