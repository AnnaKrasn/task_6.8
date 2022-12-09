const userText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в a изменён на', userText);

document.querySelector('#Yandex').addEventListener('click', 
  (event) => {
    event.preventDefault();
    alert('Вы кликнули по ссылке и ничего не произошло');
})