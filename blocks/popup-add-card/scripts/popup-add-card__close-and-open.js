document.querySelector('.profile__add-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card__input_edit_name').placeholder = 'Название';
  document.querySelector('.popup-add-card__input_edit_description').placeholder = 'Ссылка на картинку';
  document.querySelector('.popup-add-card').setAttribute('class', 'popup popup-add-card popup_opened');
});

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card').setAttribute('class', 'popup popup-add-card');
});