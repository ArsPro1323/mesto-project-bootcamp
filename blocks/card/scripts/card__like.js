function LikeSwitch(evt) {
  if (evt.currentTarget.value == "ON") {
    evt.currentTarget.value = "OFF";
    evt.currentTarget.className = "card__like-button card__like-button_off";
  } else {
    evt.currentTarget.value = "ON";
    evt.currentTarget.className = "card__like-button card__like-button_on";
  }
}

for (let i = 0; i < document.querySelectorAll('.card__like-button').length; i++) {
  let obj = document.querySelectorAll('.card__like-button')[i];
  obj.addEventListener('click', LikeSwitch);
}