'use strict';

const large = document.getElementById('largeImg');
const ul = document.querySelector('#thumbs');

ul.addEventListener('click', (act) => {
  act.preventDefault();

  const li = act.target.closest('.list-item__link');

  if (li) {
    large.src = li.href;
  }
});
