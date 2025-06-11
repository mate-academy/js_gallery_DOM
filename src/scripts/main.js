'use strict';

const li = document.querySelectorAll('li');
const mainImage = document.querySelector('#largeImg');

li.forEach((image) => {
  image.addEventListener('click', (im) => {
    im.preventDefault();

    const imageLink = im.target.closest('a');

    if (imageLink !== null){
      mainImage.src = imageLink.href;
    }
  });
});
