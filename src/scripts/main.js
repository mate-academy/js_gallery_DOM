'use strict';

let largeImg = document.querySelector('#largeImg')

let images = [...document.querySelectorAll('.list-item__link')]

images.forEach(image => {
    image.addEventListener("click", (e) => {
        e.preventDefault()
        largeImg.src = image.href
    })
});