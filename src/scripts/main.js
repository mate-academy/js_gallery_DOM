'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', function (eventt) {
    eventt.preventDefault(); // щоб не переходити за посиланням

    // Знаходимо <a>, навіть якщо клік був по <img>
    const link = eventt.target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }

    // Змінюємо src великого зображення на href посилання
    largeImg.src = link.href;
  });
});
