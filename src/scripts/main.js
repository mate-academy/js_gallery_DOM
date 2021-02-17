'use strict';

const largeImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (event) => {
    event.preventDefault();
    largeImg.attributes.src.value = event.target.closest('a').attributes.href.value;

});
