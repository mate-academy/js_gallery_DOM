'use strict';

const ul = document.querySelector('#thumbs');
const large = document.querySelector('#largeImg');

const changer = function() {
  const target = event.target;

  event.preventDefault();
  large.src = target.closest('a').href;
};

ul.addEventListener('click', changer);
