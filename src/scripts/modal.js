const popup_card_image = document.querySelector('.popup-card__image');
const popup_card_description = document.querySelector('.popup-card__description');
const popup_edit_form_element = document.querySelector('.popup-edit__form');
import { imagePopup } from '../index.js';
import { profile_description } from '../index.js';
import { profile_title } from '../index.js';
import { profilePopup } from '../index.js';

function openPopup (cur_popup) {
  cur_popup.classList.add('popup_opened');
}

function closePopup (cur_popup) {
  cur_popup.classList.remove('popup_opened');
}

function openPopupCard(evt) {
  evt.preventDefault();
  const item = evt.currentTarget.closest('.card');
  popup_card_image.src = item.querySelector('.card__image').src;
  popup_card_description.textContent = item.querySelector('.card__description').textContent;
  openPopup(imagePopup);
}

function ChangeProfile(evt) {
  evt.preventDefault();

  const nameInput = popup_edit_form_element.querySelector('.popup-edit__input_edit_name');
  const jobInput = popup_edit_form_element.querySelector('.popup-edit__input_edit_description');
  const name = nameInput.value;
  const job = jobInput.value;
  
  profile_title.textContent = String(name);
  profile_description.textContent = String(job);
  profilePopup.setAttribute('class', 'popup popup-edit');
}

export { openPopupCard };
export { closePopup };
export { openPopup };
export { ChangeProfile };