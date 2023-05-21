import './pages/index.css';
import { enableValidation, toggleButtonState } from './components/validate.js';
import { closePopup } from './components/modal.js';
import { openPopup } from './components/modal.js';
import { drawDefaultCards, switchLike } from './components/card.js';
import { drawCard } from './components/card.js';
import { getInitialCards } from './components/api.js'
import { pushCard } from './components/api.js';
import { getProfileInfo } from './components/api.js'
import { updateProfile } from './components/api.js';
import { changeLogoProfile } from './components/api.js';


const profilePopup = document.querySelector('.popup-edit');
const cardPopup = document.querySelector('.popup-add-card');
const profileLogoPopup = document.querySelector('.popup-edit-logo');
const profileEditSubmitButton = document.querySelector('.popup-edit__save-button');
const profileAddSubmitButton = document.querySelector('.popup-add-card__save-button');
const imagePopup = document.querySelector('.popup-card');
const profileLogoPopupLink = profileLogoPopup.querySelector('.popup-edit-logo__input')
const popupAddNameInput = document.querySelector('.popup-add-card__input_edit_name');
const popupAddJobInput = document.querySelector('.popup-add-card__input_edit_description');
const popupEditNameInput = document.querySelector('.popup-edit__input_edit_name');
const popupEditJobInput = document.querySelector('.popup-edit__input_edit_description');
const profileDescription = document.querySelector('.profile__description');
const profileTitle = document.querySelector('.profile__name');
const cards = document.querySelector('.elements');
const nameEditInput = document.querySelector('.popup-edit__input_edit_name');
const jobEditInput = document.querySelector('.popup-edit__input_edit_description');
const logoInput = document.querySelector('.popup-edit-logo__input');
const logo = document.querySelector('.profile__image');
const popupChangeLogoForm = document.querySelector('.popup-edit-logo__form');
const changeLogoSubmitButton = document.querySelector('.popup-edit-logo__save-button');
let myId;

let initialCards = [];

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

Promise.all([getProfileInfo(), getInitialCards()])
  .then(([userData, cards]) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      logo.style.backgroundImage = 'url(' + userData.avatar + ')';
      myId = userData._id;

      for (let i = 0; i < cards.length; i++) {
        initialCards.push({name: cards[i].name, link: cards[i].link, likes: cards[i].likes, owner: cards[i].owner._id, id: cards[i]._id});
      }
      drawDefaultCards();

  })
  .catch(err => {
    console.log(err);
  });

enableValidation(settings);

function addCard(evt) {
  evt.preventDefault();
  profileAddSubmitButton.textContent = 'Сохранение...';
  const cardName = popupAddNameInput.value;
  const card_link = popupAddJobInput.value;
  
  pushCard(cardName, card_link)
    .then((result) => {
      cards.prepend(drawCard(result.link, result.name, [], myId, result._id));
      closePopup(cardPopup);
      document.removeEventListener('keydown', closeByEscape);
    })
    .finally(() => {
      profileAddSubmitButton.textContent = 'Сохранить';
    })
    .catch((err) => {
      console.log(err);
    });
}

function changeProfile(evt) {
  evt.preventDefault();
  profileEditSubmitButton.textContent = 'Сохранение...';
  const name = nameEditInput.value;
  const job = jobEditInput.value;
  
  updateProfile(name, job)
    .then((result) => {
      profileTitle.textContent = result.name;
      profileDescription.textContent = result.about;
      closePopup(profilePopup);
      document.removeEventListener('keydown', closeByEscape);
    })
    .finally(() => {
      profileEditSubmitButton.textContent = 'Сохранить';
    })
    .catch((err) => {
      console.log(err);
    });
}

function changeLogo(evt) {
  evt.preventDefault();
  changeLogoSubmitButton.textContent = 'Сохранение...';
  const logoUrl = logoInput.value;

  changeLogoProfile(logoUrl)
    .then((result) => {
      logo.style.backgroundImage = 'url(' + result.avatar + ')';
      closePopup(profileLogoPopup);
      document.removeEventListener('keydown', closeByEscape);
    })
    .finally(() => {
      changeLogoSubmitButton.textContent.textContent = 'Сохранить';
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  closePopup(cardPopup);
  document.removeEventListener('keydown', closeByEscape);
});

const inputAddList = Array.from(document.querySelector('.popup-add-card__form').querySelectorAll(settings.inputSelector));
const addButtonElement = document.querySelector('.popup-add-card__form').querySelector(settings.submitButtonSelector);

const inputEditLogoList = Array.from(popupChangeLogoForm.querySelectorAll(settings.inputSelector));

document.querySelector('.profile__add-button').addEventListener("click", function() {
  popupAddNameInput.value = '';
  popupAddJobInput.value = '';
  toggleButtonState(settings, inputAddList, addButtonElement);
  openPopup(cardPopup);
  document.addEventListener('keydown', closeByEscape);
});

document.querySelector('.popup-add-card__form').addEventListener('submit', addCard);

document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  closePopup(imagePopup);
  document.removeEventListener('keydown', closeByEscape);
});

document.querySelector('.profile__edit-button').addEventListener("click", function() {
  popupEditNameInput.value = profileTitle.textContent;
  popupEditJobInput.value = profileDescription.textContent;
  openPopup(profilePopup);
  document.addEventListener('keydown', closeByEscape);
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  closePopup(profilePopup);
  document.removeEventListener('keydown', closeByEscape);
});

const popup_edit_form_element = document.querySelector('.popup-edit__form');

popup_edit_form_element.addEventListener('submit', changeProfile); 

popupChangeLogoForm.addEventListener('submit', changeLogo); 

cardPopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(cardPopup);
    document.removeEventListener('keydown', closeByEscape);
  }
})

profilePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profilePopup);
    document.removeEventListener('keydown', closeByEscape);
  }
})

imagePopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(imagePopup);
    document.removeEventListener('keydown', closeByEscape);
  }
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened'); 
    closePopup(openedPopup);
    document.removeEventListener('keydown', closeByEscape);
  }
}

document.querySelector('.profile__change-logo-button').addEventListener("click", function() {
  logoInput.value = '';
  toggleButtonState(settings, inputEditLogoList, changeLogoSubmitButton);
  openPopup(profileLogoPopup);
  document.addEventListener('keydown', closeByEscape);
});

document.querySelector('.popup-edit-logo__close-button').addEventListener("click", function() {
  closePopup(profileLogoPopup);
  document.removeEventListener('keydown', closeByEscape);
});

profileLogoPopup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(profileLogoPopup);
    document.removeEventListener('keydown', closeByEscape);
  }
})

export { switchLike };
export { myId };
export { initialCards };
export { popupAddNameInput };
export { popupAddJobInput };
export { cardPopup };
export { imagePopup };
export { profileDescription };
export { profileTitle };
export { profilePopup };
export { cards };
export { closeByEscape };