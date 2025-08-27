// Пример переменных в JavaScript
// Объявление с let
let username = "Алекс"; // изменяемая переменная

// Объявление с const
const appName = "Мой игровой блог"; // не будет переназначена

// Старый способ var
var oldVar = "старый способ";

// Функция для обновления UI
function updateUI() {
  const userSpan = document.getElementById('userName');
  const notes = document.getElementById('notes');
  if (userSpan) userSpan.textContent = username;
  if (notes) notes.textContent = `appName = ${appName}; oldVar = ${oldVar}`;
}

// Нажатие на кнопку — меняем username и обновляем UI
const btn = document.getElementById('learnBtn');
if (btn) {
  btn.addEventListener('click', function () {
    // переназначаем переменную let
    username = (username === 'Алекс') ? 'Маша' : 'Алекс';

    // пример: нельзя переназначить const (раскомментируйте, чтобы увидеть ошибку в консоли)
    // appName = 'Другая строка'; // TypeError: Assignment to constant variable.

    // var можно переназначать
    oldVar = oldVar === 'старый способ' ? 'новый способ' : 'старый способ';

    updateUI();
  });
}

// Первичная отрисовка
updateUI();

// --- Функции для урока по DOM ---
function changeTitle() {
  const title = document.getElementById('main-title');
  if (title) title.textContent = 'Привет, мир!';
}

function changeColor() {
  const title = document.getElementById('main-title');
  if (title) title.style.color = 'blue';
}

function hideTitle() {
  const title = document.getElementById('main-title');
  if (title) title.style.display = 'none';
}

function addParagraph() {
  const newP = document.createElement('p');
  newP.textContent = 'Это новый текст, добавленный через DOM.';
  newP.style.margin = '10px';
  document.body.appendChild(newP);
}

// Подключаем обработчики после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  const changeTitleBtn = document.getElementById('changeTitleBtn');
  const changeColorBtn = document.getElementById('changeColorBtn');
  const hideTitleBtn = document.getElementById('hideTitleBtn');
  const addParaBtn = document.getElementById('addParaBtn');

  if (changeTitleBtn) changeTitleBtn.addEventListener('click', changeTitle);
  if (changeColorBtn) changeColorBtn.addEventListener('click', changeColor);
  if (hideTitleBtn) hideTitleBtn.addEventListener('click', hideTitle);
  if (addParaBtn) addParaBtn.addEventListener('click', addParagraph);
});
