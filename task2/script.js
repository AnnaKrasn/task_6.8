const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
})

const alertLog = document.querySelector('#alertLog');

alertLog.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
})

const promptLog = document.querySelector('#promptLog');

promptLog.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})
