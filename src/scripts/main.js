'use strict';

const icons = document.querySelector('.gallery__list');
const main = document.querySelector('.gallery__large-img');

for (let item of icons.querySelectorAll('.list-item')) {
  item.addEventListener('click', (evt) => {
    item = evt.target.closest('.list-item__link');

    evt.preventDefault();

    main.src = item.href;
  });
}
