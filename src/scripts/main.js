'use strict';
const largeImg = document.querySelector('#largeImg');
const imgList = document.querySelector('#thumbs');

imgList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('a') || target.closest('img')) {
    event.preventDefault();

    const src = target.closest('li').querySelector('img').src;

    largeImg.src = src;
  }
})
