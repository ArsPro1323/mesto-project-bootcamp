const profilePopup = document.querySelector('.popup-edit');
const cardPopup = document.querySelector('.popup-add-card');
const imagePopup = document.querySelector('.popup-card');
const cards = document.querySelector('.elements');

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

function DrawCard(link, card_name) {
  const cardTemplate = document.querySelector('#card').content; 
  const cards = document.querySelector('.elements');
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = card_name;
  card.querySelector('.card__image').addEventListener('click', openPopupCard);

  card.querySelector('.card__name').textContent = card_name;

  card.querySelector('.card__like-button').type = 'button';
  card.querySelector('.card__like-button').addEventListener('click', switchLike);


  card.querySelector('.card__delete-button').type = 'button';
  card.querySelector('.card__delete-button').addEventListener('click', DeleteCard);
  
  cards.prepend(card);
}

function drawDefaultCards() {
  for (let i = 0; i < initialCards.length; i++) {
    DrawCard(initialCards[i].link, initialCards[i].name);
  }
}

drawDefaultCards();

function openPopup (cur_popup) {
  cur_popup.classList.add('popup_opened');
}

function closePopup (cur_popup) {
  cur_popup.classList.remove('popup_opened');
}

function openPopupCard(evt) {
  evt.preventDefault();
  const item = evt.currentTarget.closest('.card');
  document.querySelector('.popup-card__image').setAttribute('src', item.querySelector('.card__image').src);
  document.querySelector('.popup-card__description').textContent = item.querySelector('.card__description').textContent;
  openPopup(imagePopup);
}

function switchLike(evt) {
  evt.preventDefault();
  evt.currentTarget.classList.toggle("card__like-button_on");
}

document.querySelector('.popup-add-card__close-button').addEventListener("click", function() {
  closePopup(cardPopup);
});

document.querySelector('.profile__add-button').addEventListener("click", function() {
  document.querySelector('.popup-add-card__input_edit_name').value = '';
  document.querySelector('.popup-add-card__input_edit_description').value = '';
  openPopup(cardPopup);
});

function addCard(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector('.popup-add-card__input_edit_name');
  const jobInput = document.querySelector('.popup-add-card__input_edit_description');

  const card_name = nameInput.value;
  const card_link = jobInput.value;
  
  DrawCard(card_link, card_name);

  document.querySelector('.popup-add-card__input_edit_name').value = '';
  document.querySelector('.popup-add-card__input_edit_description').value = '';
  closePopup(cardPopup);
}

document.querySelector('.popup-add-card__form').addEventListener('submit', addCard);

document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  closePopup(imagePopup);
});

document.querySelector('.profile__edit-button').addEventListener("click", function() {
  document.querySelector('.popup-edit__input_edit_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup-edit__input_edit_description').value = document.querySelector('.profile__description').textContent;
  openPopup(profilePopup);
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  closePopup(profilePopup);
});

const formElement = document.querySelector('.popup-edit__form');

function ChangeProfile(evt) {
  evt.preventDefault();

  const nameInput = formElement.querySelector('.popup-edit__input_edit_name');
  const jobInput = formElement.querySelector('.popup-edit__input_edit_description');
  const name = nameInput.value;
  const job = jobInput.value;
  
  document.querySelector('.profile__name').textContent = String(name);
  document.querySelector('.profile__description').textContent = String(job);
  profilePopup.setAttribute('class', 'popup popup-edit');
}

formElement.addEventListener('submit', ChangeProfile); 

function DeleteCard(evt) {
  const cardToDelete = evt.currentTarget.closest('.card');
  cardToDelete.remove();
}