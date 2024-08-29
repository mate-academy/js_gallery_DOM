'use strict';

const li = document.querySelectorAll('li');
const largeImg = document.querySelector('#largeImg');

li.forEach((element) => {
  const link = element.querySelector('a');

  link.addEventListener('click', (eventOfClick) => {
    eventOfClick.preventDefault();

    const href = link.getAttribute('href');

    largeImg.setAttribute('src', `http://localhost:3001${href}`);
  });
});
