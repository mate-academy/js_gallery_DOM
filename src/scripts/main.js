'use strict';

const links = document.querySelectorAll('.list-item__link');
// const images = document.querySelectorAll('.gallery__thumb');
const largeImg = document.querySelector('#largeImg');

for (let i = 0; i < links.length; i++) {
  links[i].removeAttribute('href');

  let number = '';

  switch (i) {
    case 0:
      number = 'first';
      break;
    case 1:
      number = 'second';
      break;
    case 2:
      number = 'third';
      break;
    case 3:
      number = 'fourth';
      break;
    case 4:
      number = 'fifth';
      break;
  }

  const source = `http://localhost:8080/images/landscape-${number}.png`;

  links[i].addEventListener('click', () => {
    largeImg.setAttribute('src', source);
  });
}
