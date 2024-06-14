/* eslint-disable no-shadow */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.list-item__link');
  const mainItem = document.getElementById('largeImg');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const link = event.currentTarget;

      if (link !== mainItem.src) {
        mainItem.src = link;
      }
    });
  });
});
