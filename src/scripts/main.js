'use strict';

const mainPicture = document.getElementById('largeImg');
const allLi = [...document.querySelectorAll('.list-item')];


allLi.map(el => {
    const anchor = el.querySelector('a');
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        mainPicture.setAttribute('src', anchor.href);
    });
});
