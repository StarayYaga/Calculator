function getResult() { // получаем данные в поле ввода
    return document.querySelector('.result').textContent
}

function printResult(result) { // выводим полученные данные
    document.querySelector('.result').textContent = result
}

const operators = document.querySelectorAll('.operator') // получаем все опарторы
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() { // проверяем их на клик
        let result = getResult() // получаеи данные с экрана
        let operator = operators[i].id // опредиляем оператор

        if (operators[i].id == 'clear') { // очищаем экран
            printResult('')
        } else if (operators[i].id == 'backspace') { // удаляем последний символ
            result = result.substring(0, result.length - 1)
            printResult(result) // выводим на экран значение
        } else if (operators[i].id == '=') { //выполняем действие в задаче
            let output = eval(result)
            printResult(output)
        } else { // выводим на экран дейсвие
            let output = result + operators[i].id
            printResult(output)
        }

    })
}

const numbers = document.querySelectorAll('.number') // получаем все номера
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i].id // опредиляем номер
    numbers[i].addEventListener('click', function() { // проверяем их на клик
            let result = getResult() // получаем результат на экране
            let output = result + number // поствляем число к текушим данным
            printResult(output)
        }) // выводим на экран значение
}