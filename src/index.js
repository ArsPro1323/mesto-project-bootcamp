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

import { enableValidation } from './scripts/validate.js';
import { drawDefaultCards } from './scripts/card.js';
import { ChangeProfile } from './scripts/modal.js';
import { closePopup } from './scripts/modal.js';
import { openPopup } from './scripts/modal.js';
import { addCard } from './scripts/card.js';

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

export { popup_add_nameInput };
export { popup_add_jobInput };
export { cardPopup };
export { imagePopup };
export { profile_description };
export { profile_title };
export { profilePopup };
export {  };

drawDefaultCards();

function switchLike(evt) {
  evt.preventDefault();
  evt.currentTarget.classList.toggle("card__like-button_on");
}

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  closePopup(cardPopup);
});

document.querySelector('.profile__add-button').addEventListener("click", function() {
  popup_add_nameInput.value = '';
  popup_add_jobInput.value = '';
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

popup_edit_form_element.addEventListener('submit', ChangeProfile); 

profilePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup);
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
  if (evt.keyCode == 27) {
    closePopup(document.querySelector('.popup_opened'));
  }
}); 

export { switchLike };