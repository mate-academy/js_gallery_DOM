'use strict';

const imageButtons = document.querySelectorAll('.list-item__link');
const mainImage = document.querySelector('#largeImg');

imageButtons.forEach((button) => {
  button.addEventListener('click', handleImageButtonClick);
});

function handleImageButtonClick(clickEvent) {
  clickEvent.preventDefault();

  const button = clickEvent.currentTarget;

  if (!mainImage) {
    return;
  }

  mainImage.src = button.href;
}
