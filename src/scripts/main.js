'use strict';

const smallPics = Array.from(document.querySelectorAll('li'));
const largeImg = document.querySelector('#largeImg');

smallPics.forEach(li => {
  li.addEventListener('click', (action) => {
    action.preventDefault();
    largeImg.src = li.querySelector('a').href;
  });
});
