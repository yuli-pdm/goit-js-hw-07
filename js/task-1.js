// 1. Знаходимо список категорій
const categoriesList = document.querySelector('#categories');

// 2. Знаходимо всі елементи категорій
const categoriesItems = categoriesList.querySelectorAll('.item');

// 3. Виводимо кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// 4. Проходимося по кожній категорії
categoriesItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});