'use strict';

const list = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

document.addeListener('click', (e) => {
  if (e.target.parentElement.tagName === 'A' 
    || e.target.tagName === 'A') {

      e.preDefault();
  }
});

list.addeListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    largeImg.src = e.target.parentElement.href;
  }

  if (e.target.tagName === 'A') {
    largeImg.src = e.target.href;
  }
});
