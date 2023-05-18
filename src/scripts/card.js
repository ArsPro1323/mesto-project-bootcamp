const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.elements');

function drawCard(link, card_name) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = card_name;
  card.querySelector('.card__image').addEventListener('click', openPopupCard);

  card.querySelector('.card__name').textContent = card_name;

  card.querySelector('.card__like-button').addEventListener('click', switchLike);

  card.querySelector('.card__delete-button').addEventListener('click', DeleteCard);
  
  return card;
}

function drawDefaultCards() {
  console.log(1);
  for (let i = 0; i < initialCards.length; i++) {
    cards.prepend(drawCard(initialCards[i].link, initialCards[i].name));
  }
}

export { drawDefaultCards };