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

import { openPopupCard } from './modal.js';
import { switchLike } from '../index.js';
import { closePopup } from './modal.js';

const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.elements');
import { popup_add_nameInput } from '../index.js';
import { popup_add_jobInput } from '../index.js';
import { cardPopup } from '../index.js';

function drawCard(link, card_name) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = card_name;
  card.querySelector('.card__image').addEventListener('click', openPopupCard);

  card.querySelector('.card__name').textContent = card_name;

  card.querySelector('.card__like-button').addEventListener('click', switchLike);

  card.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  
  return card;
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

function addCard(evt) {
  evt.preventDefault();

  const card_name = popup_add_nameInput.value;
  const card_link = popup_add_jobInput.value;
  
  cards.prepend(drawCard(card_link, card_name));

  closePopup(cardPopup);
}

export { drawDefaultCards };
export { deleteCard };
export { addCard };