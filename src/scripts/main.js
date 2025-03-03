'use strict';

const largeImg = document.querySelector('#largeImg');
const imgLink = [...document.querySelectorAll('a')];

for (const i of imgLink) {
  i.addEventListener('click', (e) => {
    e.preventDefault();

    largeImg.setAttribute('src', e.currentTarget.href);
  });
}
