function handleFormSubmit(evt) {
  const cards = document.querySelector('.elements');
  const nameInput = document.querySelector('.popup-add-card__input_edit_name');
  const jobInput = document.querySelector('.popup-add-card__input_edit_description');
  evt.preventDefault();

  let card_name = nameInput.value;
  let card_link = jobInput.value;
  
  card = document.createElement('div');
  card.setAttribute('class', 'card');

  image = document.createElement('img');
  image.setAttribute('class', 'card__image');
  image.setAttribute('alt', card_name);
  image.setAttribute('src', card_link);

  let info = document.createElement('div');
  info.setAttribute('class', 'card__description');

  let name = document.createElement('h2');
  name.setAttribute('class', 'card__name');
  name.textContent = card_name;

  let like_button = document.createElement('button');
  like_button.setAttribute('type', 'buton');
  like_button.setAttribute('class', 'card__like-button card__like-button_off');
  like_button.setAttribute('value', 'OFF');

  let delete_button = document.createElement('button');
  delete_button.setAttribute('type', 'buton');
  delete_button.setAttribute('class', 'card__delete-button');
  
  card.append(delete_button);
  info.append(name);
  info.append(like_button);
  card.append(image);
  card.append(info);
  cards.prepend(card);

  document.querySelector('.popup-add-card__input_edit_name').value = '';
  document.querySelector('.popup-add-card__input_edit_description').value = '';
  document.querySelector('.popup-add-card').setAttribute('class', 'popup popup-add-card');
  like_button.addEventListener('click', LikeSwitch);
  delete_button.addEventListener('click', DeleteCard);
  image.addEventListener('click', OpenCard);
}

document.querySelector('.popup-add-card__form').addEventListener('submit', handleFormSubmit);