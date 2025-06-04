'use strict';

const firstImage = document.querySelector('a[title="Image 1"]');
const secondImage = document.querySelector('a[title="Image 2"]');
const thirdImage = document.querySelector('a[title="Image 3"]');
const forthImage = document.querySelector('a[title="Image 4"]');
const fifthImage = document.querySelector('a[title="Image 5"]');
const primaryImage = document.querySelector('.gallery__large-img');

function imageChanger(element) {
  element.addEventListener('click', (eventer) => {
    eventer.preventDefault();

    primaryImage.src = element.href;
  });
}

imageChanger(firstImage);
imageChanger(secondImage);
imageChanger(thirdImage);
imageChanger(forthImage);
imageChanger(fifthImage);
