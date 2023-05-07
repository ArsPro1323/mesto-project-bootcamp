const formElement = document.querySelector('.popup-edit__form');

const nameInput = formElement.querySelector('.popup-edit__input_edit_name');
const jobInput = formElement.querySelector('.popup-edit__input_edit_description');

function handleFormSubmit(evt) {
  evt.preventDefault();

  let name = nameInput.value;
  let job = jobInput.value;
  
  document.querySelector('.profile__name').textContent = String(name);
  document.querySelector('.profile__description').textContent = String(job);
  document.querySelector('.popup-edit').setAttribute('class', 'popup-edit');
}

formElement.addEventListener('submit', handleFormSubmit); 