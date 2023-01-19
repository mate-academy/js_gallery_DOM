'use strict';

const links = document.querySelectorAll('.list-item__link');
const large = document.querySelector('#largeImg');

for (const item of links) {
  item.addEventListener('click', () => {
    event.preventDefault();

    large.src = item.href;
  }
  );
}
