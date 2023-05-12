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

function openPopup (popup){
  popup.classList.add('popup_opened');
}

function closePopup (popup){
  popup.classList.remove('popup_opened');
}

function openPopupCard(evt) {
  const item = evt.currentTarget.closest('.card');
  document.querySelector('.popup-card__image').setAttribute('src', item.querySelector('.card__image').src);
  document.querySelector('.popup-card__description').textContent = item.querySelector('.card__description').textContent;
  openPopup(document.querySelector('.popup-card'));
}

function LikeSwitch(evt) {
  if (evt.currentTarget.value == "ON") {
    evt.currentTarget.value = "OFF";
    evt.currentTarget.className = "card__like-button card__like-button_off";
  } else {
    evt.currentTarget.value = "ON";
    evt.currentTarget.className = "card__like-button card__like-button_on";
  }
}

document.querySelector('.profile__add-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card__input_edit_name').placeholder = 'Название';
  document.querySelector('.popup-add-card__input_edit_description').placeholder = 'Ссылка на картинку';
  document.querySelector('.popup-add-card').setAttribute('class', 'popup-add-card popup-add-card_opened');
});

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card').setAttribute('class', 'popup-add-card');
});

document.querySelector('.profile__add-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card__input_edit_name').placeholder = 'Название';
  document.querySelector('.popup-add-card__input_edit_description').placeholder = 'Ссылка на картинку';
  document.querySelector('.popup-add-card').setAttribute('class', 'popup popup-add-card popup_opened');
});

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card').setAttribute('class', 'popup popup-add-card');
});


function DrawCard(link, card_name) {
  const cards = document.querySelector('.elements');
  card = document.createElement('div');
  card.setAttribute('class', 'card');

  image = document.createElement('img');
  image.setAttribute('class', 'card__image');
  image.setAttribute('alt', card_name);
  image.setAttribute('src', link);

  let info = document.createElement('div');
  info.setAttribute('class', 'card__description');

  let name = document.createElement('h2');
  name.setAttribute('class', 'card__name');
  name.textContent = card_name;

  let like_button = document.createElement('button');
  like_button.setAttribute('type', 'buton');
  like_button.setAttribute('class', 'card__like-button card__like-button_off');
  like_button.setAttribute('value', 'OFF');
  like_button.addEventListener('click', LikeSwitch);

  let delete_button = document.createElement('button');
  delete_button.setAttribute('type', 'buton');
  delete_button.setAttribute('class', 'card__delete-button');
  delete_button.addEventListener('click', DeleteCard);
  
  card.append(delete_button);
  info.append(name);
  info.append(like_button);
  card.append(image);
  card.append(info);
  cards.prepend(card);
}

function drawCards() {
  for (var i = 0; i < initialCards.length; i++) {
    DrawCard(initialCards[i].link, initialCards[i].name);
  }
}

drawCards();

function addCard(evt) {
  evt.preventDefault();

  const cards = document.querySelector('.elements');
  const nameInput = document.querySelector('.popup-add-card__input_edit_name');
  const jobInput = document.querySelector('.popup-add-card__input_edit_description');

  let card_name = nameInput.value;
  let card_link = jobInput.value;
  
  DrawCard(card_link, card_name);

  document.querySelector('.popup-add-card__input_edit_name').value = '';
  document.querySelector('.popup-add-card__input_edit_description').value = '';
  closePopup(document.querySelector('.popup-add-card'));
 
  image.addEventListener('click', openPopupCard);
}

document.querySelector('.popup-add-card__form').addEventListener('submit', addCard);


document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  document.querySelector('.popup-card').setAttribute('class', 'popup popup-card');
});

for (let i = 0; i < document.querySelectorAll('.card__image').length; i++) {
  let obj = document.querySelectorAll('.card__image')[i];
  obj.addEventListener('click', openPopupCard);
}

document.querySelector('.profile__edit-button').addEventListener("click", function() {
  document.querySelector('.popup-edit__input_edit_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup-edit__input_edit_description').value = document.querySelector('.profile__description').textContent;
  openPopup(document.querySelector('.popup-edit'));
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  document.querySelector('.popup-edit').setAttribute('class', 'popup popup-edit');
});

const formElement = document.querySelector('.popup-edit__form');

const nameInput = formElement.querySelector('.popup-edit__input_edit_name');
const jobInput = formElement.querySelector('.popup-edit__input_edit_description');

function ChangeProfile(evt) {
  evt.preventDefault();

  let name = nameInput.value;
  let job = jobInput.value;
  
  document.querySelector('.profile__name').textContent = String(name);
  document.querySelector('.profile__description').textContent = String(job);
  document.querySelector('.popup-edit').setAttribute('class', 'popup popup-edit');
}

formElement.addEventListener('submit', ChangeProfile); 

function DeleteCard(evt) {
  const cardToDelete = evt.currentTarget.closest('.card');
  cardToDelete.remove();
}

for (let i = 0; i < document.querySelectorAll('.card__delete-button').length; i++) {
  let obj = document.querySelectorAll('.card__delete-button')[i];
  obj.addEventListener('click', DeleteCard);
}