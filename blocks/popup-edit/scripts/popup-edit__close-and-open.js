document.querySelector('.profile__edit-button').addEventListener("click", function() {
  document.querySelector('.popup-edit__input_edit_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup-edit__input_edit_description').value = document.querySelector('.profile__description').textContent;
  document.querySelector('.popup-edit').setAttribute('class', 'popup-edit popup-edit_opened');
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  document.querySelector('.popup-edit').setAttribute('class', 'popup-edit');
});