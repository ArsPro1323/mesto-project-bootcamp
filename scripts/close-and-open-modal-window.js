document.querySelector('.profile__edit-button').addEventListener("click", function() {
  document.querySelector('.popup').setAttribute('class', 'popup popup_opened');
});

document.querySelector('.popup__close-button').addEventListener("click", function() {
  document.querySelector('.popup').setAttribute('class', 'popup');
});