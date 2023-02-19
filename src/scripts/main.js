'use strict';

const largeImage = document.querySelector('#largeImg');
const smalImages = document.querySelectorAll('a');

for (const item of smalImages) {
  // eslint-disable-next-line no-shadow
  item.addEventListener('click', function(event) {
    event.preventDefault();
    largeImage.src = item.href;
  });
}
