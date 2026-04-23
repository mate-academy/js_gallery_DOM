'use strict';

const slider = document.querySelector('.gallery__list');
const mainPicture = document.querySelector('.gallery__large-img');

function changeMainPicture(newLink) {
  mainPicture.src = newLink.href;
}

slider.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (link) {
    changeMainPicture(link);
    e.preventDefault();
  }
});
