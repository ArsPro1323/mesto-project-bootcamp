import { closePopup } from './modal.js';
import { initialCards } from '../index.js';
import { myId } from '../index.js';
import { popup_add_nameInput } from '../index.js';
import { popup_add_jobInput } from '../index.js';
import { cardPopup } from '../index.js';
import { cards } from '../index.js';
import { openPopup } from './modal.js';
import { imagePopup } from '../index.js';
import { likeCard } from './api.js';
import { dislikeCard } from './api.js';
import { deleteMyCard } from './api.js';
import { closeByEscape } from '../index.js';

const cardTemplate = document.querySelector('#card').content;
const popupCardImage = document.querySelector('.popup-card__image');
const popupCardDescription = document.querySelector('.popup-card__description');

function drawCard(link, card_name, likes, cardOwnerId, cardId) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.id = cardId;
  const cardImage = card.querySelector('.card__image');
  cardImage.src = link;
  cardImage.alt = card_name;
  cardImage.addEventListener('click', openPopupCard);

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

function switchLike(evt) {
  evt.preventDefault();
  const CurrentLikeButton = evt.currentTarget;
  const cardToLike = CurrentLikeButton.closest('.card');
  const numberOfLikes = evt.currentTarget.closest('.card__like-section').querySelector('.card__like-number'); 
  if (String(evt.currentTarget.classList).includes('card__like-button_on')) { 
    dislikeCard(cardToLike.id).then((result) => {
      CurrentLikeButton.classList.toggle("card__like-button_on");
      numberOfLikes.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    likeCard(cardToLike.id).then((result) => {
      CurrentLikeButton.classList.toggle("card__like-button_on");
      numberOfLikes.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

function openPopupCard(evt) {
  evt.preventDefault();
  const item = evt.currentTarget.closest('.card');
  const description = item.querySelector('.card__description').textContent
  popupCardImage.src = item.querySelector('.card__image').src;
  popupCardImage.alt = description;
  popupCardDescription.textContent = description;
  openPopup(imagePopup);
  document.addEventListener('keydown', closeByEscape);
}

function drawDefaultCards() {
  for (let i = 0; i < initialCards.length; i++) {
    cards.append(drawCard(initialCards[i].link, initialCards[i].name, initialCards[i].likes, initialCards[i].owner, initialCards[i].id));
  }
}

function deleteCard(evt) {
  const cardToDelete = evt.currentTarget.closest('.card');
  deleteMyCard(cardToDelete.id).then((result) => {
    cardToDelete.remove();
  })
  .catch((err) => {
    console.log(err);
  });
}

export { drawDefaultCards };
export { deleteCard };
export { switchLike };
export { drawCard };