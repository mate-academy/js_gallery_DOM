'use strict';

const largeImage = document.querySelector('#largeImg');
const smalImages = document.querySelectorAll('a');

for (const item of smalImages) {
  item.addEventListener('click', (myFunction) => {
    myFunction.preventDefault();
    largeImage.src = item.href;
  });
}
