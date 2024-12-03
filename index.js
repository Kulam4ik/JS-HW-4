////////////////////////////! Завдання 1 ////////////////////////////////

const btn = document.querySelector('[type="submit"]');
const message = document.querySelector('.text')
const first = document.querySelector('.one');
const second = document.querySelector('.two');



btn.addEventListener('click', (e)=>{
    e.preventDefault()

 
        if(first.value && second.value){
        message.textContent = "Обидва поля заповнені";
           }else{
            message.textContent = "Не всі поля заповнені"
           }
})


////////////////////////////! Завдання 2 ////////////////////////////////

const button = document.querySelector('.button');
const msg = document.querySelector('.msg')
const third = document.querySelector('.first');
const fourth = document.querySelector('.second');

button.addEventListener('click', (e) => {
    e.preventDefault()
    const input = Number(third.value);
    
     const input2 = Number(fourth.value);
    console.log(input2);
    if (input + input2 <= 10) {
         message.textContent = "Сума менша або дорівнює 10"
    } else {
        message.textContent = "Сума більша за 10";
       
    }
})


////////////////////////////! Завдання 3 ////////////////////////////////

const btnTask3 = document.querySelector('.btn_task3');
const mes = document.querySelector('.mes')
const fifth = document.querySelector('.input_task3');

btnTask3.addEventListener('click', (e)=>{
    e.preventDefault()

const productName = inputTask3.value;
    console.log(productName);
 
        if(productName.includes("JavaScript")){
        message.textContent = "Текст містить слово JavaScript";
           }else{
        message.textContent = "Текст не містить слово JavaScript";
           }
})


////////////////////////////! Завдання 4 ////////////////////////////////

function checkNumber() {
    const number = parseInt(document.getElementById("numberInput").value);
    const result = document.getElementById("numberResult");

    if (number > 10 && number < 20) {
        result.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        result.textContent = "Число не входить в діапазон від 10 до 20";
    }
}


////////////////////////////! Завдання 5 ////////////////////////////////

function validateForm() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("formResult");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length >= 3 && emailPattern.test(email) && password.length >= 6) {
        result.textContent = "";
        window.location.href = "index.html"; 
    } else {
        result.textContent = "Помилка: Перевірте введені дані!";
    }
}