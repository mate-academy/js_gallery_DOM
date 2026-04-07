'use strict';

const largeImage = document.getElementById('largeImg');
const tumbsCollection = document.querySelectorAll('ul li');

tumbsCollection.forEach((li) => {
  const liLink = li.firstElementChild;
  const liImg = liLink.firstElementChild;
  const linkContent = liLink.href;

  if (liLink || liImg) {
    liLink.addEventListener('click', () => {
      liLink.href = '#';
      largeImage.src = linkContent;
    });

    liImg.addEventListener('click', () => {
      largeImage.src = liLink.href;
    });
  }
});
