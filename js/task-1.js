// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// У консолі має бути виведено наступне повідомлення:

// const listCategories = document.querySelector('#categories');
// console.log('listCategories:', listCategories);


const listCategories = document.querySelector('#categories');
console.log('listCategories:', listCategories);

const items = listCategories.querySelectorAll('.item');
console.log('Number of categories:', items.length);

items.forEach(item => {
  const titleHeader = item.querySelector('h2').textContent;
  const elementsLength = item.querySelectorAll('ul li').length;
  console.log(`Category: ${titleHeader}`);
  console.log(`Elements: ${elementsLength}`);
});