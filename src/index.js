import './pages/index.css';

import { getProfileId } from './scripts/api.js';
const profilePopup = document.querySelector('.popup-edit');
const cardPopup = document.querySelector('.popup-add-card');
const profileLogoPopup = document.querySelector('.popup-edit-logo');
const profileEditSubmitButton = document.querySelector('.popup-edit__save-button');
const profileAddSubmitButton = document.querySelector('.popup-add-card__save-button');
const imagePopup = document.querySelector('.popup-card');
const profileLogoPopupLink = profileLogoPopup.querySelector('.popup-edit-logo__input')
const popup_add_nameInput = document.querySelector('.popup-add-card__input_edit_name');
const popup_add_jobInput = document.querySelector('.popup-add-card__input_edit_description');
const popup_edit_nameInput = document.querySelector('.popup-edit__input_edit_name');
const popup_edit_jobInput = document.querySelector('.popup-edit__input_edit_description');
const profile_description = document.querySelector('.profile__description');
const profile_title = document.querySelector('.profile__name');
const cards = document.querySelector('.elements');
const nameEditInput = document.querySelector('.popup-edit__input_edit_name');
const jobEditInput = document.querySelector('.popup-edit__input_edit_description');
const logoInput = document.querySelector('.popup-edit-logo__input');
const logo = document.querySelector('.profile__image');
const popupChangeLogoForm = document.querySelector('.popup-edit-logo__form');
const changeLogoSubmitButton = document.querySelector('.popup-edit-logo__save-button');

let myId;

getProfileId()
   .then((result) => {
    myId = result._id;
   })
   .catch((err) => {
     console.log(err);
   });

export { myId };

let initialCards = [];

import { enableValidation, toggleButtonState } from './scripts/validate.js';
import { closePopup } from './scripts/modal.js';
import { openPopup } from './scripts/modal.js';
import { drawDefaultCards, switchLike } from './scripts/card.js';
import { drawCard } from './scripts/card.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

import { getInitialCards } from './scripts/api.js'

getInitialCards()
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      initialCards.push({name: result[i].name, link: result[i].link, likes: result[i].likes, owner: result[i].owner._id, id: result[i]._id});
    }
    drawDefaultCards();
  })
  .catch((err) => {
    console.log(err);
  });

export { initialCards };

enableValidation(settings);

import { pushCard } from './scripts/api.js';

function addCard(evt) {
  evt.preventDefault();
  profileAddSubmitButton.textContent = 'Сохранение...';
  const card_name = popup_add_nameInput.value;
  const card_link = popup_add_jobInput.value;
  
  pushCard(card_name, card_link)
    .then((result) => {
      cards.prepend(drawCard(result.link, result.name, [], myId, result._id));
    })
    .catch((err) => {
      console.log(err);
    });

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

import { getProfileInfo } from './scripts/api.js'

getProfileInfo()
  .then((result) => {
    profile_title.textContent = result.name;
    profile_description.textContent = result.about;
    logo.style.backgroundImage = 'url(' + result.avatar + ')';
  })
  .catch((err) => {
    console.log(err);
  });

import { updateProfile } from './scripts/api.js';

function changeProfile(evt) {
  evt.preventDefault();
  profileEditSubmitButton.textContent = 'Сохранение...';
  const name = nameEditInput.value;
  const job = jobEditInput.value;
  
  updateProfile(name, job)
    .then((result) => {
      profile_title.textContent = result.name;
      profile_description.textContent = result.about;
    })
    .catch((err) => {
      console.log(err);
    });

  profilePopup.classList.remove('popup_opened');
}

import { changeLogoProfile } from './scripts/api.js';

function ChangeLogo(evt) {
  evt.preventDefault();
  changeLogoSubmitButton.textContent = 'Сохранение...';
  const logoUrl = logoInput.value;

  changeLogoProfile(logoUrl)
    .then((result) => {
      logo.style.backgroundImage = 'url(' + result.avatar + ')';
    })
    .catch((err) => {
      console.log(err);
    });
  closePopup(profileLogoPopup);
}

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  closePopup(cardPopup);
});

const inputAddList = Array.from(document.querySelector('.popup-add-card__form').querySelectorAll(settings.inputSelector));
const addButtonElement = document.querySelector('.popup-add-card__form').querySelector(settings.submitButtonSelector);

const inputEditLogoList = Array.from(popupChangeLogoForm.querySelectorAll(settings.inputSelector));

document.querySelector('.profile__add-button').addEventListener("click", function() {
  popup_add_nameInput.value = '';
  popup_add_jobInput.value = '';
  toggleButtonState(settings, inputAddList, addButtonElement);
  profileAddSubmitButton.textContent = 'Сохранить';
  openPopup(cardPopup);
});

document.querySelector('.popup-add-card__form').addEventListener('submit', addCard);

document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  closePopup(imagePopup);
});

document.querySelector('.profile__edit-button').addEventListener("click", function() {
  popup_edit_nameInput.value = profile_title.textContent;
  popup_edit_jobInput.value = profile_description.textContent;
  profileEditSubmitButton.textContent = 'Сохранить';
  openPopup(profilePopup);
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  closePopup(profilePopup);
});

const popup_edit_form_element = document.querySelector('.popup-edit__form');

popup_edit_form_element.addEventListener('submit', changeProfile); 

popupChangeLogoForm.addEventListener('submit', ChangeLogo); 

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
  if (evt.key === "Escape" && document.querySelector('.popup_opened') !== null) {
    closePopup(document.querySelector('.popup_opened'));
  }
}); 

document.querySelector('.profile__change-logo-button').addEventListener("click", function() {
  logoInput.value = '';
  toggleButtonState(settings, inputEditLogoList, changeLogoSubmitButton);
  changeLogoSubmitButton.textContent = 'Сохранить';
  openPopup(profileLogoPopup);
});

document.querySelector('.popup-edit-logo__close-button').addEventListener("click", function() {
  closePopup(profileLogoPopup);
});

profileLogoPopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profileLogoPopup);
  }
})

export { switchLike };