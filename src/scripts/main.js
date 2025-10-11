'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', function (e) {
  e.preventDefault(); // запобігаємо переходу за посиланням

  // Знаходимо найближчий <a> навіть якщо клік був по <img>
  const link = e.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  // Змінюємо велике зображення
  largeImg.src = link.href;
  largeImg.alt = link.title;
});
