function DeleteCard(evt) {
  console.log(2);
  const cardToDelete = evt.currentTarget.closest('.card');
  cardToDelete.remove();
}

for (let i = 0; i < document.querySelectorAll('.card__delete-button').length; i++) {
  let obj = document.querySelectorAll('.card__delete-button')[i];
  obj.addEventListener('click', DeleteCard);
}