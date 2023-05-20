import { closePopup } from './modal.js';
import { initialCards } from '../index.js';
import { myId } from '../index.js';

const cardTemplate = document.querySelector('#card').content;
const popup_card_image = document.querySelector('.popup-card__image');
const popup_card_description = document.querySelector('.popup-card__description');

import { popup_add_nameInput } from '../index.js';
import { popup_add_jobInput } from '../index.js';
import { cardPopup } from '../index.js';
import { cards } from '../index.js';
import { openPopup } from './modal.js';
import { imagePopup } from '../index.js';

function drawCard(link, card_name, likes, cardOwnerId, cardId) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.id = cardId;
  const card__image = card.querySelector('.card__image');
  card__image.src = link;
  card__image.alt = card_name;
  card__image.addEventListener('click', openPopupCard);

  card.querySelector('.card__like-number').textContent = likes.length;

  card.querySelector('.card__name').textContent = card_name;
  
  const likeButton = card.querySelector('.card__like-button');
  for (let i = 0; i < likes.length; ++i) {
    if (likes[i]._id == myId) {
      likeButton.classList.add("card__like-button_on");
    }
  }
  likeButton.addEventListener('click', switchLike);

  const deleteCardButton = card.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', deleteCard);
  if (cardOwnerId !== myId) {
    deleteCardButton.classList.add('card__delete-button-inactive');
  }
  
  return card;
}
import { likeCard } from './api.js';
import { dislikeCard } from './api.js';

function switchLike(evt) {
  evt.preventDefault();
  const cardToDelete = evt.currentTarget.closest('.card');
  evt.currentTarget.classList.toggle("card__like-button_on");
  const numberOfLikes = evt.currentTarget.closest('.card__like-section').querySelector('.card__like-number');
  if (String(evt.currentTarget.classList).includes('card__like-button_on')) {
    numberOfLikes.textContent = Number(numberOfLikes.textContent) + 1;
    likeCard(cardToDelete.id);
  } else {
    numberOfLikes.textContent = Number(numberOfLikes.textContent) - 1;
    dislikeCard(cardToDelete.id);
  }
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
    cards.append(drawCard(initialCards[i].link, initialCards[i].name, initialCards[i].likes, initialCards[i].owner, initialCards[i].id));
  }
}

import { deleteMyCard } from './api.js';

function deleteCard(evt) {
  const cardToDelete = evt.currentTarget.closest('.card');
  deleteMyCard(cardToDelete.id);
  cardToDelete.remove();
}

export { drawDefaultCards };
export { deleteCard };
export { switchLike };
export { drawCard };