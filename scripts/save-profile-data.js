const formElement = document.querySelector('.popup__form');

const nameInput = document.querySelector('.popup__input_edit_name');
const jobInput = formElement.querySelector('.popup__input_edit_description');

function handleFormSubmit(evt) {
  evt.preventDefault();

  let name = nameInput.value;
  let job = jobInput.value;

  console.log(name);
  console.log(job);
  
  document.querySelector('.profile__name').textContent = String(name);
  document.querySelector('.profile__description').textContent = String(job);
  document.querySelector('.popup').setAttribute('class', 'popup');
}

formElement.addEventListener('submit', handleFormSubmit); 