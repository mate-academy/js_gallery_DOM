'use strict';

// Крок 1: Отримання необхідних елементів
const ul = document.querySelector('#thumbs'); // Використовуємо селектор по ID
const img = document.querySelector('#largeImg');

// Перевірка, чи елементи знайдено
if (ul && img) {
  // Крок 2: Налаштування слухача подій (Event Listener) для делегування
  ul.addEventListener('click', (e) => {
    // Крок 3a: Запобігання стандартній дії
    e.preventDefault();

    // Крок 3b: Визначення цілі кліку
    const clickedElement = e.target;

    // Крок 3c: Пошук потрібного посилання (<a>)
    const linkElement = clickedElement.closest('a');

    // Крок 3d: Перевірка, чи знайдено посилання
    if (linkElement) {
      // Крок 4a: Отримання URL великого зображення
      const largeImageUrl = linkElement.href;

      // Крок 4b: Зміна головного зображення
      img.src = largeImageUrl;
    }
  });
}
