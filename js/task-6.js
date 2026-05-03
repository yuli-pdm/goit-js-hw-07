const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  const boxesMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;

    boxesMarkup.push(`
      <div
        style="
          width: ${size}px;
          height: ${size}px;
          background-color: ${getRandomHexColor()};
        "
      ></div>
    `);
  }

  boxes.insertAdjacentHTML('beforeend', boxesMarkup.join(''));
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    input.value = '';
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);