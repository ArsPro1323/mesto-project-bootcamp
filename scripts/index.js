const profilePopup = document.querySelector('.popup-edit');
const cardPopup = document.querySelector('.popup-add-card');
const imagePopup = document.querySelector('.popup-card');
const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const popup_card_image = document.querySelector('.popup-card__image');
const popup_card_description = document.querySelector('.popup-card__description');
const popup_add_nameInput = document.querySelector('.popup-add-card__input_edit_name');
const popup_add_jobInput = document.querySelector('.popup-add-card__input_edit_description');
const popup_edit_nameInput = document.querySelector('.popup-edit__input_edit_name');
const popup_edit_jobInput = document.querySelector('.popup-edit__input_edit_description');
const profile_description = document.querySelector('.profile__description');
const profile_title = document.querySelector('.profile__name');

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
  for (let i = 0; i < initialCards.length; i++) {
    cards.prepend(drawCard(initialCards[i].link, initialCards[i].name));
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
  popup_card_image.src = item.querySelector('.card__image').src;
  popup_card_description.textContent = item.querySelector('.card__description').textContent;
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
  popup_add_nameInput.value = '';
  popup_add_jobInput.value = '';
  openPopup(cardPopup);
});

function addCard(evt) {
  evt.preventDefault();

  const card_name = popup_add_nameInput.value;
  const card_link = popup_add_jobInput.value;
  
  cards.prepend(drawCard(card_link, card_name));

  closePopup(cardPopup);
}

document.querySelector('.popup-add-card__form').addEventListener('submit', addCard);

document.querySelector('.popup-card__close-button').addEventListener("click", function() {
  closePopup(imagePopup);
});

document.querySelector('.profile__edit-button').addEventListener("click", function() {
  popup_edit_nameInput.value = profile_title.textContent;
  popup_edit_jobInput.value = profile_description.textContent;
  openPopup(profilePopup);
});

document.querySelector('.popup-edit__close-button').addEventListener("click", function() {
  closePopup(profilePopup);
});

const popup_edit_form_element = document.querySelector('.popup-edit__form');

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

popup_edit_form_element.addEventListener('submit', ChangeProfile); 

function DeleteCard(evt) {
  const cardToDelete = evt.currentTarget.closest('.card');
  cardToDelete.remove();
}