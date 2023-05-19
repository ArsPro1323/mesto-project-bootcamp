const popup_edit_form_element = document.querySelector('.popup-edit__form');

import { profile_description } from '../index.js';
import { profile_title } from '../index.js';
import { profilePopup } from '../index.js';
import { cardPopup } from '../index.js';
import { imagePopup } from '../index.js';

function openPopup (cur_popup) {
  cur_popup.classList.add('popup_opened');
}

function closePopup (cur_popup) {
  cur_popup.classList.remove('popup_opened');
}

export { closePopup };
export { openPopup };