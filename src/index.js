import './pages/index.css';

const profilePopup = document.querySelector('.popup-edit');
const cardPopup = document.querySelector('.popup-add-card');
const imagePopup = document.querySelector('.popup-card');
const popup_add_nameInput = document.querySelector('.popup-add-card__input_edit_name');
const popup_add_jobInput = document.querySelector('.popup-add-card__input_edit_description');
const popup_edit_nameInput = document.querySelector('.popup-edit__input_edit_name');
const popup_edit_jobInput = document.querySelector('.popup-edit__input_edit_description');
const profile_description = document.querySelector('.profile__description');
const profile_title = document.querySelector('.profile__name');
const cards = document.querySelector('.elements');
const nameEditInput = document.querySelector('.popup-edit__input_edit_name');
const jobEditInput = document.querySelector('.popup-edit__input_edit_description');

import { enableValidation, toggleButtonState } from './scripts/validate.js';
import { drawDefaultCards } from './scripts/card.js';
import { closePopup } from './scripts/modal.js';
import { openPopup } from './scripts/modal.js';
import { switchLike } from './scripts/card.js';
import { drawCard } from './scripts/card.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

enableValidation(settings);

function addCard(evt) {
  evt.preventDefault();

  const card_name = popup_add_nameInput.value;
  const card_link = popup_add_jobInput.value;
  
  cards.prepend(drawCard(card_link, card_name));

  closePopup(cardPopup);
}

export { popup_add_nameInput };
export { popup_add_jobInput };
export { cardPopup };
export { imagePopup };
export { profile_description };
export { profile_title };
export { profilePopup };
export { cards };

drawDefaultCards();

function changeProfile(evt) {
  evt.preventDefault();

  const name = nameEditInput.value;
  const job = jobEditInput.value;
  
  profile_title.textContent = String(name);
  profile_description.textContent = String(job);
  profilePopup.classList.remove('popup_opened');
}

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  closePopup(cardPopup);
});

const inputAddList = Array.from(document.querySelector('.popup-add-card__form').querySelectorAll(settings.inputSelector));
const addButtonElement = document.querySelector('.popup-add-card__form').querySelector(settings.submitButtonSelector);

document.querySelector('.profile__add-button').addEventListener("click", function() {
  popup_add_nameInput.value = '';
  popup_add_jobInput.value = '';
  toggleButtonState(settings, inputAddList, addButtonElement);
  openPopup(cardPopup);
});

document.querySelector('.popup-add-card__form').addEventListener('submit', addCard);

document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  closePopup(imagePopup);
});

document.querySelector('.profile__edit-button').addEventListener("click", function() {
  popup_edit_nameInput.value = profile_title.textContent;
  popup_edit_jobInput.value = profile_description.textContent;
  openPopup(profilePopup);
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  closePopup(profilePopup);
});

const popup_edit_form_element = document.querySelector('.popup-edit__form');

popup_edit_form_element.addEventListener('submit', changeProfile); 

cardPopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(cardPopup);
  }
})

profilePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup);
  }
})

imagePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imagePopup);
  }
})

document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}); 

export { switchLike };