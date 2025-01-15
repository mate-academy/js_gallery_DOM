'use strict';

const largeImage = document.querySelector('.gallery__large-img');

const smallImages= document.querySelectorAll('.gallery__thumb');

const links = document.querySelectorAll('.list-item__link');

links.forEach((link) => {
  link.addEventListener('click', linkClick);
});

smallImages.forEach((image) => {
  image.addEventListener('click', function (element) {
    largeImage.setAttribute('src', element.target.src);
  });
});

function linkClick(element) {
  element.preventDefault();
}
