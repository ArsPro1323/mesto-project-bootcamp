document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  document.querySelector('.popup-card').setAttribute('class', 'popup-card');
});

function OpenCard(evt) {
  const item = evt.currentTarget.closest('.card');
  document.querySelector('.popup-card__image').setAttribute('src', item.querySelector('.card__image').src);
  document.querySelector('.popup-card__description').textContent = item.querySelector('.card__description').textContent;
  document.querySelector('.popup-card').setAttribute('class', 'popup-card popup-card_opened');
}

for (let i = 0; i < document.querySelectorAll('.card__image').length; i++) {
  let obj = document.querySelectorAll('.card__image')[i];
  obj.addEventListener('click', OpenCard);
}


// document.querySelector('.card').addEventListener("click", function() {
  
//   document.querySelector('.popup-card').setAttribute('class', 'popup-card popup-card_opened');
// });