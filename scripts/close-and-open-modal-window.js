document.querySelector('.profile__edit-button').addEventListener("click", function() {
  document.querySelector('.popup__input_edit_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__input_edit_description').value = document.querySelector('.profile__description').textContent;
  document.querySelector('.popup').setAttribute('class', 'popup popup_opened');
});

document.querySelector('.popup__close-button').addEventListener("click", function() {
  document.querySelector('.popup').setAttribute('class', 'popup');
});