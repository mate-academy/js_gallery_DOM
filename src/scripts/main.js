'use strict';

const gallary = document.getElementById(`largeImg`);
const list = document.querySelector(`ul`);

list.addEventListener(`click`, (event1) => {
  gallary.src = event1.target.parentNode.href;
  event1.preventDefault();
});
