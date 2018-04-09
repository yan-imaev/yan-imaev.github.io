let box = document.getElementById('box');
console.log(box);

let btn = document.getElementsByTagName('button');
console.log(btn[1]);

let circle = document.getElementsByClassName('circle');
console.log(circle[2]);

let oneHeart = document.querySelector('.heart');
let heart = document.querySelectorAll('.heart');
console.log(oneHeart);
console.log(heart);

box.style.backgroundColor = "blue";

let div = document.createElement('div');
console.log(div);

circle[0].style.backgroundColor = 'red';
circle[2].style.height = '200px';

let text = document.createTextNode('Тут был я');
console.log(text);

div.classList.add("black");
document.body.appendChild(div);
document.body.insertBefore(div, btn[2]);
document.body.removeChild(circle[2]);
document.body.replaceChild(heart[2], circle[0]);

div.innerHTML = prompt('Введите ваше имя');

